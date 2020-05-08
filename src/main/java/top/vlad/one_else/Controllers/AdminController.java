package top.vlad.one_else.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import top.vlad.one_else.Entities.Post;
import top.vlad.one_else.Entities.Role;
import top.vlad.one_else.Entities.User;
import top.vlad.one_else.Service.PostService;
import top.vlad.one_else.Service.UserService;
import top.vlad.one_else.helpClasses.LoginUser;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {
    @Autowired
    UserService userService;
    @Autowired
    PostService postService;

    @PostMapping("/admin/login")
    public boolean loginAdmin(@RequestBody LoginUser loginUser) {
        User admin = userService.findUserByEmail(loginUser.getEmail());
        if (admin == null)
            return false;

        String roleAdmin = "";
        for (Role r : admin.getRoles()) {
            roleAdmin = r.getRole();
        }

        if (roleAdmin == "ROLE_ADMIN") {
            if (loginUser.getPassword().equals(admin.getPassword())) {
                return true;
            }
        }
        return false;
    }

    @DeleteMapping("/admin/posts/{id}")
    public boolean deletePost(@PathVariable("id") Post post){
        return postService.deletePost(post);
    }

}
