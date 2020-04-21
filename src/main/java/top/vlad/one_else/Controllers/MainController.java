package top.vlad.one_else.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import top.vlad.one_else.Entities.User;
import top.vlad.one_else.Service.UserService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MainController {
    @Autowired
    UserService userService;

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @PostMapping("/registration")
    public boolean saveUser(@RequestBody User user){
       return userService.saveUser(user);
    }

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable("id") User user){
        userService.deleteUser(user);
    }

    @RequestMapping("/login")
    public boolean loginUser(@RequestBody User user){
        User userFromDb = userService.findUserByUsername(user.getUsername());
        if(userFromDb == null)
            return false;
        if(user.getPassword().equals(userFromDb.getPassword()))
            return true;
        else return false;

    }
}
