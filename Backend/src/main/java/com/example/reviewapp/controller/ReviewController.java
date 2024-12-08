package com.example.reviewapp.controller;

import com.example.reviewapp.model.Review;
import com.example.reviewapp.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/reviews")
public class ReviewController {

    private final ReviewRepository reviewRepository;

    @Autowired
    public ReviewController(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    // Add a new review
    @PostMapping
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

    // Get all reviews
    @GetMapping
    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    // Update a review
    @PutMapping("/{id}")
    public ResponseEntity<?> updateReview(@PathVariable Long id, @RequestBody Review reviewDetails) {
        Optional<Review> optionalReview = reviewRepository.findById(id);
        if (optionalReview.isPresent()) {
            Review review = optionalReview.get();
            review.setReviewText(reviewDetails.getReviewText());
            review.setRating(reviewDetails.getRating());
            review.setUser(reviewDetails.getUser());
            Review updatedReview = reviewRepository.save(review);
            return ResponseEntity.ok(updatedReview);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Review not found");
        }
    }

    // Delete a review
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteReview(@PathVariable Long id) {
        Optional<Review> optionalReview = reviewRepository.findById(id);
        if (optionalReview.isPresent()) {
            reviewRepository.deleteById(id);
            return ResponseEntity.ok().body("Review deleted successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Review not found");
        }
    }
}
