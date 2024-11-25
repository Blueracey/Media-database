package com.example.Backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "reviews")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "review_text", nullable = false, columnDefinition = "TEXT")
    private String reviewText;

    @Column(nullable = false)
    private int rating;

    @ManyToOne
    @JoinColumn(name = "media_id", nullable = false) // Foreign key
    private MediaDetails mediaDetails;

    // Getters and Setters

    public int getRating() {
        return rating;
    }

}
