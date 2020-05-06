package top.vlad.one_else.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import top.vlad.one_else.Entities.User;
import top.vlad.one_else.helpClasses.LoginUser;
import top.vlad.one_else.Service.UserService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MainController {

//    fdwffwfwfwf
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

    @PostMapping("/login")
    public boolean loginUser(@RequestBody LoginUser loginUser){
        User userFromDb = userService.findUserByEmail(loginUser.getEmail());
        if(userFromDb == null)
            return false;
        if(loginUser.getPassword().equals(userFromDb.getPassword()))
            return true;
        else return false;

    }
}
