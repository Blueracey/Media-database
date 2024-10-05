import React, { useState } from 'react';

const AddReview = () => {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission
        console.log("Review Submitted: ", review, "Rating: ", rating);
        // Reset the fields
        setReview('');
        setRating(0);
    };

    return (
        <div>
            <h2>Add a Review</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="review">Review:</label>
                    <textarea
                        id="review"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="rating">Rating:</label>
                    <input
                        type="number"
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        min="1"
                        max="5"
                        required
                    />
                </div>
                <button type="submit">Submit Review</button>
            </form>
        </div>
    );
};

export default AddReview;
