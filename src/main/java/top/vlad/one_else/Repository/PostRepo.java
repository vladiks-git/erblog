package top.vlad.one_else.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import top.vlad.one_else.Entities.Post;

public interface PostRepo extends JpaRepository<Post, Long> {
    public Post getPostById(Long id);
}
