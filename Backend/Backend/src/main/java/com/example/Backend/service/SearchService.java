package com.example.Backend.service;

import com.example.Backend.entity.Search;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.Backend.repository.IRepository;

import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;


@Service
public class  SearchService {


    @Autowired
    IRepository repository;

    
    public List<Search> getAllSearchs() {

        return repository.findAll();
    }

    

    //public Optional<Search> getSearchById(int id) {
     //   return repository.findById(id);
    //}

    
    public Search createSearch(@RequestBody Search search){

        return repository.save(search);
    }
}



