// src/components/AddReview.js

import React, { useState } from 'react';
import './AddReview.css';

const AddReview = () => {
    const [review, setReview] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rating, setRating] = useState(0);
    const [reviews, setReviews] = useState([]); 

    const handleSubmit = (e) => {
        e.preventDefault();

        
        const newReview = { review, name, email, rating };

        
        setReviews([...reviews, newReview]);

        // Reset the fields after submission
        setReview('');
        setName('');
        setEmail('');
        setRating(0);
    };

    return (
        <div className="add-review">
            <h2>Leave a Review</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>How would you rate your experience?</label>
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
                    <label htmlFor="review">Reviews:</label>
                    <textarea
                        id="review"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="name">Name*:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email*:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit Review</button>
            </form>

            <div className="reviews-list">
                <h3>Submitted Reviews</h3>
                {reviews.length === 0 ? (
                    <p>No reviews submitted yet.</p>
                ) : (
                    <ul>
                        {reviews.map((rev, index) => (
                            <li key={index}>
                                <strong>Name: {rev.name}</strong> <br />
                                <strong>Email: {rev.email}</strong> <br />
                                <strong>Rating: {rev.rating} {Array(rev.rating).fill('★').join('')}</strong>
                                <p>{rev.review}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default AddReview;
