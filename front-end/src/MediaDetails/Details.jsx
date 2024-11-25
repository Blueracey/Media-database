import React from "react";
import "./Details.css";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();

  // Fallback dummy data
  const dummyData = {
    title: "Dummy Title",
    creator: "Dummy Creator",
    reviewAverage: 4.5,
    numberOfReviews: 10,
    details: "This is a dummy description for the media item.",
    reviews: ["Great media!", "Loved it!", "Could be better.", "Amazing experience!"],
  };

  // Use actual data if passed, else use dummy data
  const data = location.state?.data || dummyData;

  return (
    <div className="media-details-container">
      <div className="media-header">
        <div className="media-picture">Picture</div>
        <div className="media-info">
          <h1>{data.title}</h1>
          <p>Creator: {data.creator}</p>
          <p>Review Average: {data.reviewAverage}</p>
          <p>Number of Reviews: {data.numberOfReviews}</p>
        </div>
      </div>
      <div className="media-description">
        <p>{data.details}</p>
      </div>
      <div className="media-actions">
        <div className="reviews-container">
          {Array.isArray(data.reviews) && data.reviews.length > 0 ? (
            data.reviews.map((review, index) => (
              <p key={index}>{review}</p>
            ))
          ) : (
            <p>No reviews available.</p>
          )}
        </div>
        <a href="#" className="add-review">Add Review</a>
      </div>
    </div>
  );
};

export default Details;
