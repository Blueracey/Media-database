package com.example.Backend.controller;

import com.example.Backend.entity.Review;
import com.example.Backend.service.ReviewService; // Import the service layer
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @GetMapping("/media/{mediaId}")
    public ResponseEntity<List<Map<String, Object>>> getReviewsByMediaId(@PathVariable Long mediaId) {
        List<Map<String, Object>> reviews = reviewService.getFormattedReviewsByMediaId(mediaId);
        return ResponseEntity.ok(reviews);
    }

    @PostMapping
    public ResponseEntity<Review> createReview(@RequestBody Review review) {
        Review createdReview = reviewService.createReview(review);
        return ResponseEntity.ok(createdReview);
    }
}
