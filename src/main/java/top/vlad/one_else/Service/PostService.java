package top.vlad.one_else.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import top.vlad.one_else.Entities.Post;
import top.vlad.one_else.Repository.PostRepo;

import java.util.List;

@Service
public class PostService {
    @Autowired
    PostRepo postRepo;

    public List<Post> getAllPosts(){
        return postRepo.findAll();
    }

    public void savePost(Post post){
        postRepo.save(post);
    }
}
