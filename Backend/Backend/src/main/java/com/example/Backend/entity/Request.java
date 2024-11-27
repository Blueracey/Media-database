package com.example.Backend.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import org.hibernate.annotations.CreationTimestamp;


import java.sql.Timestamp;
import java.util.Collection;

@Entity
@Table(name = "requests")
public class Request {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "created_at", nullable = false, updatable = false)
    @CreationTimestamp
    private Timestamp createdAt;

    @Column(name = "media_type", nullable = false)
    @JsonProperty("media_type")
    @NotNull(message = "Media Type is required")
    private String mediaType;

    @Column(name = "title", nullable = false)
    @NotNull(message = "Title is required")
    private String title;

    @Column(name = "details", nullable = false)
    @NotNull(message = "Details is required")
    private String details;

    // Commenting out the user field since User is not set up yet
    // @ManyToOne(fetch = FetchType.LAZY)
    // @JoinColumn(name = "user_id", referencedColumnName = "id", onDelete = SetNull)
    // private User user;

    // Getters and Setters

    public String getTitle() {
        return title;
    }


    public String getDetails() {
        return details;
    }

    public String getMediaType() {
        return mediaType;
    }

    public void setMediaType(String mediaType) {
        this.mediaType = mediaType;
    }


    // Uncomment when User is set up
    /*
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
    */
}
