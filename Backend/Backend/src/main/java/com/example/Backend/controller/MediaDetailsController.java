package com.example.Backend.controller;

import com.example.Backend.entity.MediaDetails;
import com.example.Backend.service.MediaDetailsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/media")
public class MediaDetailsController {

    private final MediaDetailsService mediaDetailsService;

    public MediaDetailsController(MediaDetailsService mediaDetailsService) {
        this.mediaDetailsService = mediaDetailsService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<MediaDetails> getMediaDetailsById(@PathVariable Long id) {
        try {
            MediaDetails mediaDetails = mediaDetailsService.getMediaDetailsWithReviews(id);
            return ResponseEntity.ok(mediaDetails);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<MediaDetails>> getAllMediaDetails() {
        List<MediaDetails> mediaDetailsList = mediaDetailsService.getAllMediaDetails();
        return ResponseEntity.ok(mediaDetailsList);
    }
}
