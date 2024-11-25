package com.example.Backend.repository;

import com.example.Backend.entity.MediaDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MediaDetailsRepository extends JpaRepository<MediaDetails, Long> {
    // No need for additional methods
}
