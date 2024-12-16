package com.example.Backend.service;

import com.example.Backend.entity.Request;
import com.example.Backend.entity.Search;
import com.example.Backend.repository.RequestRepository;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class RequestService {

    private final RequestRepository requestRepository;

    public RequestService(RequestRepository requestRepository) {
        this.requestRepository = requestRepository;
    }

    public Request createRequest(Request request) {
        return requestRepository.save(request);
    }


    public List<Request> getAllRequests() {

        return requestRepository.findAll();
    }
    
}
