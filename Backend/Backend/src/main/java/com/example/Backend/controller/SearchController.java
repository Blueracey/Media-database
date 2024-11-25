package com.example.Backend.controller;


import com.example.Backend.Exceptions.ResourceNotFoundException;
import com.example.Backend.entity.Search;
import com.example.Backend.service.SearchService;
import org.springdoc.core.service.RequestBodyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/api/v1/search")
public class SearchController {

    @Autowired
    SearchService searchService;
    private RequestBodyService requestBodyBuilder;

    @GetMapping
    public List<Search> getAllSearch() {
        return searchService.getAllSearchs();
    }

    //get by id
    @GetMapping("{id}")
    public ResponseEntity<Search> getSearchById(@PathVariable  int id){
        Search search = searchService.getSearchById(id).orElseThrow(() -> new ResourceNotFoundException("Search was invalid" +id));
        return ResponseEntity.ok(search);
    } //https://www.youtube.com/watch?v=aCZmPgBHc88

    //creates search 
    @PostMapping
    public Search createSearch(@RequestBody Search search){ 
 
        return searchService.createSearch(search);
    }


    //update search only allows for the updating of the name and review ID because everything else need to be done on the server side anyway,
    // doing it manualy is a holdover of the testing phase
    @PutMapping("{id}")
    public ResponseEntity<Search> updatedSearch(@PathVariable int id,@RequestBody Search searchinfo){

        Search newSearch = searchService.getSearchById(id)
        .orElseThrow(()-> new ResourceNotFoundException("Search was invalid" + id));


        searchService.createSearch(newSearch);

        return ResponseEntity.ok(newSearch);


    }

    //delete endpoint 
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteSearch (@PathVariable int id){

        Search newSearch = searchService.getSearchById(id)
        .orElseThrow(()-> new ResourceNotFoundException("Search was invalid" +id));


        searchService.deleteSearch(newSearch);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }


}
