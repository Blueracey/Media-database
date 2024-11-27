package com.example.Backend.repository;

import com.example.Backend.entity.MediaDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MediaDetailsRepository extends JpaRepository<MediaDetails, Long> {
}
