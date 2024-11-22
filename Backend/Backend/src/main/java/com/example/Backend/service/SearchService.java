package com.example.Backend.service;

import com.example.Backend.entity.Search;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.Backend.repository.SearchRepository;

import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;


@Service
public class  SearchService {


    @Autowired
    SearchRepository searchRepository;

    
    public List<Search> getAllSearchs() {

        return searchRepository.findAll();
    }

    

    public Optional<Search> getSearchById(int id) {
        return searchRepository.findById(id);
    }

    
    public Search createSearch(@RequestBody Search search){

        return searchRepository.save(search);
    }
}



