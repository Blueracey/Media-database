package com.example.Backend.entity;


import jakarta.annotation.Generated;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Search {

    @Id
    @GeneratedValue
    private int id;



    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "review_Id", nullable = false) // Foreign key to MediaDetails
    private MediaDetails mediaDetails;
    
    private int reviewAverage;
    private int reviewCount;

    private String title;




}
