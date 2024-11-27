package com.example.Backend.controller;

import com.example.Backend.entity.Request;
import com.example.Backend.service.RequestService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/requests")
public class RequestController {

    private final RequestService requestService;

    public RequestController(RequestService requestService) {
        this.requestService = requestService;
    }

    @PostMapping
    public ResponseEntity<?> createRequest(@RequestBody Request request) {
        // Validate mediaType
        if (request.getMediaType() == null || request.getMediaType().isEmpty()) {
            return ResponseEntity.badRequest().body("Media Type is required.");
        }

        // Validate title
        if (request.getTitle() == null || request.getTitle().trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Title is required.");
        }

        // Validate details
        if (request.getDetails() == null || request.getDetails().trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Details are required.");
        }

        try {
            // Save the request if all validations pass
            Request savedRequest = requestService.createRequest(request);
            return new ResponseEntity<>(savedRequest, HttpStatus.CREATED);
        } catch (Exception e) {
            // Handle unexpected errors
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while processing the request.");
        }
    }




    // Future User-related logic
    // @GetMapping("/{id}")
    // public ResponseEntity<Request> getRequestById(@PathVariable Long id) {
    //     Request request = requestService.getRequestById(id);
    //     return ResponseEntity.ok(request);
    // }
}
