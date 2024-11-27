import React, { useState } from 'react';
import './AddReview.css';

const AddReview = () => {
    const [review, setReview] = useState('');
    const [userId, setUserId] = useState('');
    const [rating, setRating] = useState(1);
    const [successMessage, setSuccessMessage] = useState('');

    const generateId = () => Math.floor(10000 + Math.random() * 90000);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation: Ensure all fields are filled
        if (!review || !userId || !rating) {
            alert('All fields are required!');
            return;
        }

        const newReview = {
            id: generateId(),
            reviewText: review,
            user: userId, // Changed from name to userId
            rating,
        };

        // Send the new review to the backend
        fetch('http://localhost:8091/api/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newReview),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Review submitted:', data);
                // Show success message
                setSuccessMessage('Review submitted successfully!');

                // Reset form fields after submission
                setReview('');
                setUserId('');
                setRating(0);

                // Optionally, hide the success message after 5 seconds
                setTimeout(() => {
                    setSuccessMessage('');
                }, 5000);
            })
            .catch((error) => {
                console.error('Error submitting review:', error);
            });
    };

    const handleCancel = () => {
        // Reset the fields without submitting
        setReview('');
        setUserId('');
        setRating(0);
    };

    return (
        <div className="add-review">
            <h2>Leave a Review</h2>
            {successMessage && <div className="success-message">{successMessage}</div>} {/* Display success message */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>What was your opinion on this media?</label>
                    <div className="star-rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={`star ${star <= rating ? 'selected' : ''}`}
                                onClick={() => setRating(star)}
                                role="button"
                                aria-label={`${star} star`}
                                tabIndex="0"
                                onKeyPress={(e) => e.key === 'Enter' && setRating(star)}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <label htmlFor="review">Comment:</label>
                    <textarea
                        id="review"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="userId">Display name:</label>
                    <input
                        type="text"
                        id="userId"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        required
                        maxLength="15"
                    />
                </div>
                <button type="submit">Submit Review</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default AddReview;
