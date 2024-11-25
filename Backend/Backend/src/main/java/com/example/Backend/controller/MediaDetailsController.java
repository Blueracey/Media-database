package com.example.Backend.controller;

import com.example.Backend.entity.MediaDetails;
import com.example.Backend.service.MediaDetailsService;
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
}
