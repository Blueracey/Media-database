package com.example.Backend.service;

import com.example.Backend.entity.Review;
import com.example.Backend.repository.ReviewRepository;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;

    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public List<Map<String, Object>> getFormattedReviewsByMediaId(Long mediaId) {
        // Fetch reviews by mediaDetailsId
        List<Review> reviews = reviewRepository.findByMediaDetailsId(mediaId);

        // Format the reviews
        return reviews.stream().map(review -> {
            Map<String, Object> formattedReview = new HashMap<>();
            formattedReview.put("title", review.getMediaDetails().getTitle());
            formattedReview.put("rating", review.getRating());
            formattedReview.put("comment", review.getReviewText());
//            formattedReview.put("username", review.getUser() != null ? review.getUser().getUsername() : "Anonymous");
            return formattedReview;
        }).collect(Collectors.toList());
    }


    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }
}
