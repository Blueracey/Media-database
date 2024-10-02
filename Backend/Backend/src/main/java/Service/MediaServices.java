package Service;
import Entity.Media;
import com.example.demo.entity.Blog;
import com.example.demo.repository.IRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class MediaServices {

    @Autowired
    IRepository repository;

    public List<Media> getAllBlogs() {
        return repository.findAll();
    }

    public String saveBlog(Media blog) {
        repository.save(blog);
        return "Blog Saved";
    }

    public Optional<Media> getBlogById(int id) {
        return repository.findById(id);
    }



}
