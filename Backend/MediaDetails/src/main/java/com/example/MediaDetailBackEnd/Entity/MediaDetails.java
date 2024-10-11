package com.example.MediaDetailBackEnd.Entity;

import org.springframework.data.annotation.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MediaDetails {
    @Id
    private Long id;             // Primary key
    private String name;          // Name of the media
    private String picture;       // URL or path of the picture
    private String description;   // Description of the media
    private String rating;        // Age rating (e.g., PG, R, etc.)
    private double reviewScore;   // Review score (e.g., 7.5)
    private String related;       // Related media information
}
