package com.example.Backend.repository;

import com.example.Backend.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByMediaDetailsId(Long mediaId);
}
