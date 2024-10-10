package com.example.Backend.entity;


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
    private int Searchid;
    private int reviewAverage;
    private int reviewCount;
    private String Name;




}
