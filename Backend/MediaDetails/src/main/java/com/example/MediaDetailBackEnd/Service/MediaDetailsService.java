package com.example.MediaDetailBackEnd.Service;

import com.example.MediaDetailBackEnd.Entity.MediaDetails;
import com.example.MediaDetailBackEnd.Repository.MediaDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MediaDetailsService {

    @Autowired
    private MediaDetailsRepository mediaDetailsRepository;

    public Iterable<MediaDetails> getAllMediaDetails() {
        return mediaDetailsRepository.findAll();
    }

    public Optional<MediaDetails> getMediaDetailById(Long id) {
        return mediaDetailsRepository.findById(id);
    }

    public MediaDetails addMediaDetail(MediaDetails mediaDetails) {
        return mediaDetailsRepository.save(mediaDetails);
    }

    public void deleteMediaDetail(Long id) {
        mediaDetailsRepository.deleteById(id);
    }
}
