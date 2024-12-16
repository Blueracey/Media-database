import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MDetails.css";
import { useNavigate } from "react-router-dom";

export default function MDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [details, setDetails] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchDetailsAndReviews = async () => {
            try {
                // Fetch media details
                const detailsResponse = await fetch(`http://localhost:8091/api/media/${id}`);
                const detailsData = await detailsResponse.json();
                setDetails(detailsData);

                // Fetch reviews for the media
                const reviewsResponse = await fetch(`http://localhost:8091/api/reviews/media/${id}`);
                const reviewsData = await reviewsResponse.json();
                setReviews(reviewsData);
            } catch (err) {
                console.error("Error fetching details or reviews:", err);
                setError("Failed to fetch data. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchDetailsAndReviews();
    }, [id]);

    const redirectToreview = () => {
        navigate(`/addreview/${id}`);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="media-details">
            {/* Media Header */}
            <div className="media-header">
                <div className="media-info">
                    <h2 className="media-title">{details.title}</h2>
                    <p className="media-creator">Creator: {details.creator}</p>
                    <hr className="divider" />
                    <p className="media-average">
                        Review Average: {details.reviewAverage ? details.reviewAverage.toFixed(1) : "N/A"}
                    </p>
                    <hr className="divider" />
                    <p className="media-count">Number of Reviews: {details.numberOfReviews}</p>
                </div>
            </div>

            {/* Media Description */}
            <div className="media-description">
                {details.details || "No description available."}
            </div>

            {/* Reviews Section */}
            <div className="reviews-section">
                <h3>Reviews</h3>
                <button onClick={redirectToreview} className="add-review-button">
                    Create Review
                </button>
                {reviews.length > 0 ? (
                    <ul>
                        {reviews.map((review, index) => (
                            <li key={index} className="review-item">
                                <p>{review.comment}</p>
                                <p>Rating: {review.rating}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No reviews available for this media item.</p>
                )}
            </div>
        </div>
    );
}
