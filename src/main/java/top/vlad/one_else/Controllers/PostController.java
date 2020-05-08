package top.vlad.one_else.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import top.vlad.one_else.Entities.Post;
import top.vlad.one_else.Service.PostService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PostController {
    @Autowired
    PostService postService;

    @GetMapping("/posts")
    public List<Post> getAllPosts(){
        return postService.getAllPosts();
    }

    @GetMapping("posts/{id}")
    public Post getPostByID(@PathVariable Long id){
        return postService.getPostById(id);
    }

    @PostMapping("/newpost")
    public void savePost(@RequestBody Post post){
        postService.savePost(post);
    }
}
