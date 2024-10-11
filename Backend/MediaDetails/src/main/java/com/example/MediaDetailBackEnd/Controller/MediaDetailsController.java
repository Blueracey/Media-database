package com.example.MediaDetailBackEnd.Controller;

import com.example.MediaDetailBackEnd.Entity.MediaDetails;
import com.example.MediaDetailBackEnd.Service.MediaDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/media-details")
public class MediaDetailsController {

    @Autowired
    private MediaDetailsService mediaDetailsService;

    //Get all media details
    @GetMapping
    public ResponseEntity<Iterable<MediaDetails>> getAllMediaDetails() {
        return ResponseEntity.ok(mediaDetailsService.getAllMediaDetails());
    }

    //Get specific media detail by ID
    @GetMapping("/{id}")
    public ResponseEntity<MediaDetails> getMediaDetailById(@PathVariable Long id) {
        Optional<MediaDetails> mediaDetail = mediaDetailsService.getMediaDetailById(id);
        return mediaDetail.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    //Add new media detail
    @PostMapping
    public ResponseEntity<MediaDetails> addMediaDetail(@RequestBody MediaDetails mediaDetails) {
        return ResponseEntity.ok(mediaDetailsService.addMediaDetail(mediaDetails));
    }

    //Delete media detail by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMediaDetail(@PathVariable Long id) {
        mediaDetailsService.deleteMediaDetail(id);
        return ResponseEntity.noContent().build();
    }
}
