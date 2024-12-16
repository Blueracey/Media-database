package com.example.Backend.service;

import com.example.Backend.entity.MediaDetails;
import com.example.Backend.entity.Review;
import com.example.Backend.entity.Search;
import com.example.Backend.repository.MediaDetailsRepository;
import com.example.Backend.repository.ReviewRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.OptionalDouble;

@Service
public class MediaDetailsService {

    private final MediaDetailsRepository mediaDetailsRepository;
    private final ReviewRepository reviewRepository;

    public MediaDetailsService(MediaDetailsRepository mediaDetailsRepository, ReviewRepository reviewRepository) {
        this.mediaDetailsRepository = mediaDetailsRepository;
        this.reviewRepository = reviewRepository;
    }

    // Fetch MediaDetails with calculated review average and number of reviews
    public MediaDetails getMediaDetailsWithReviews(Long mediaId) {
        MediaDetails mediaDetails = mediaDetailsRepository.findById(mediaId)
                .orElseThrow(() -> new RuntimeException("Media not found with ID: " + mediaId));

        List<Review> reviews = reviewRepository.findByMediaDetailsId(mediaId);

        // Calculate review average
        OptionalDouble averageRating = reviews.stream()
                .mapToInt(Review::getRating)
                .average();

        // Set calculated fields
        mediaDetails.setReviewAverage(averageRating.isPresent() ? averageRating.getAsDouble() : 0.0);
        mediaDetails.setNumberOfReviews(reviews.size());

        return mediaDetails;
    }

    // Fetch all MediaDetails
    public List<MediaDetails> getAllMediaDetails() {
        return mediaDetailsRepository.findAll();
    }

    public MediaDetails createMedia(@RequestBody MediaDetails mediaDetails){

        return mediaDetailsRepository.save(mediaDetails);
    }
}
