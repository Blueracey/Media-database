package com.example.Backend.service;

import com.example.Backend.entity.Review;
import com.example.Backend.repository.ReviewRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import org.springframework.web.bind.annotation.RequestBody;
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
            formattedReview.put("user", review.getUser() != null ? review.getUser() : "Mystery");
//            formattedReview.put("username", review.getUser() != null ? review.getUser().getUsername() : "Anonymous");
            return formattedReview;
        }).collect(Collectors.toList());
    }

    //add review
    public ResponseEntity<?> addReview(@RequestBody Review review) {
        if (review.getReviewText() == null || review.getReviewText().isEmpty() ||
                review.getRating() < 1 || review.getRating() > 5 ||
                review.getUser() == null || review.getUser().isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid review data");
        }
        try {
            Review savedReview = reviewRepository.save(review);
            return ResponseEntity.ok(savedReview);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }




    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }
}
