package top.vlad.one_else.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import top.vlad.one_else.Entities.User;
import top.vlad.one_else.Repository.UserRepo;

import java.util.Collections;
import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepo userRepo;


    public List<User> getAllUsers(){
        return userRepo.findAll();
    }

    public boolean deleteUser(User user){
        User userFromDb = userRepo.findUserByUsername(user.getUsername());
        if(userFromDb != null){
            userRepo.delete(user);
            return true;
        }
        return false;
    }

    public User saveUser(User user){
        User userFromDb = userRepo.findUserByEmail(user.getEmail());
        if(userFromDb != null)
            return null;
        user.setEmail(user.getEmail());
        user.setSurname(user.getSurname());
        user.setPassword(user.getPassword());
        userRepo.save(user);
        return user;
    }

    public void updateUser(User user){
        userRepo.save(user);
    }

    public User findUserByUsername(String username){
        return userRepo.findUserByUsername(username);
    }

    public User findUserByEmail(String email){
        return userRepo.findUserByEmail(email);
    }

}

