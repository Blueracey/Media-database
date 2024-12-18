package com.example.media_database.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Allow frontend to access the backend APIs
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")  // Allow the React frontend running on port 3000
                .allowedMethods("GET", "POST", "PUT", "DELETE")  // Allowed HTTP methods
                .allowCredentials(true);  // Allow credentials (cookies, authorization headers)
    }
}
