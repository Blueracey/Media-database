package com.example.Backend.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "mdetails")
public class MediaDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String creator;

    @Column(name = "picture_url")
    private String pictureUrl;

    @Column(columnDefinition = "TEXT")
    private String details;

    @Transient
    private double reviewAverage;

    @Transient
    private int numberOfReviews;

    @OneToMany(mappedBy = "mediaDetails", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Review> reviews;

    // Getters and Setters

    public void setReviewAverage(double reviewAverage) {
        this.reviewAverage = reviewAverage;
    }

    public void setNumberOfReviews(int numberOfReviews) {
        this.numberOfReviews = numberOfReviews;
    }
}
