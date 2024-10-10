package com.example.Backend.repository;




import com.example.Backend.entity.Search;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRepository extends JpaRepository<Search, Integer> {
}
