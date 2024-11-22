package com.example.Backend.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Search {

    @Id
    private int id;
    private int ReviewId;
    private int reviewAverage;
    private int reviewCount;
    @Column(nullable = false)
    private String Name;




}
