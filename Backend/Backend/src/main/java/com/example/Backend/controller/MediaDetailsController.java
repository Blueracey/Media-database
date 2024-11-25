package com.example.Backend.controller;

import com.example.Backend.entity.MediaDetails;
import com.example.Backend.service.MediaDetailsService;
import com.example.Backend.repository.MediaDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/media")
public class MediaDetailsController {

    private final MediaDetailsService mediaDetailsService;

    public MediaDetailsController(MediaDetailsService mediaDetailsService) {
        this.mediaDetailsService = mediaDetailsService;
    }

    // Get Media Details including calculated fields (Review Average, Number of Reviews)
    @GetMapping("/{id}")
    public MediaDetails getMediaDetails(@PathVariable Long id) {
        return mediaDetailsService.getMediaDetailsWithReviews(id);
    }

    @Autowired
    private MediaDetailsRepository mediaDetailsRepository; // Inject the repository

    @GetMapping("/test-db")
    public String testDbConnection() {
        // Call the repository's method using the injected instance
        long count = mediaDetailsRepository.count();
        return "Database contains " + count + " media records.";
    }

}
