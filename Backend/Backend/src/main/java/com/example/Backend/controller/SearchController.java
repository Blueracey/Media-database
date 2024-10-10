package com.example.Backend.controller;


import com.example.Backend.entity.Search;
import com.example.Backend.service.SearchService;
import org.springdoc.core.service.RequestBodyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping( "/api/v1/search")
public class SearchController {

    @Autowired
    SearchService searchService;
    private RequestBodyService requestBodyBuilder;

    @GetMapping
    public List<Search> getAllSearch() {
        return searchService.getAllSearchs();
    }




}
