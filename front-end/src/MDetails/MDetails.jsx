import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./MDetails.css";

export default function MDetails() {
    const { id } = useParams();
    const [details, setDetails] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchDetailsAndReviews = async () => {
            try {
                const detailsResponse = await axios.get(`http://localhost:8091/api/media/${id}`);
                setDetails(detailsResponse.data);

                const reviewsResponse = await axios.get(`http://localhost:8091/api/reviews/media/${id}`);
                setReviews(reviewsResponse.data);
            } catch (err) {
                console.error("Error fetching details or reviews:", err);
                setError("Failed to fetch data. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchDetailsAndReviews();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="details-container">
            <div className="details-header">
                <div className="details-picture">
                    <img src={details.pictureUrl} alt={details.title} />
                </div>
                <div className="details-info">
                    <h2>{details.title}</h2>
                    <p>Creator: {details.creator}</p>
                    <p>Details: {details.details}</p>
                </div>
            </div>
            <div className="reviews-section">
                <h3>Reviews</h3>
                {reviews.length > 0 ? (
                    <ul>
                        {reviews.map((review, index) => (
                            <li key={index}>
                                <h4>{review.title}</h4>
                                <p>Rating: {review.rating}</p>
                                <p>Comment: {review.comment}</p>
                                <p>By: {review.username}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No reviews available for this media</p>
                )}
            </div>
        </div>
    );
}
