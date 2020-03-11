package top.vlad.one_else.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import top.vlad.one_else.Entities.Role;
import top.vlad.one_else.Entities.User;
import top.vlad.one_else.Repository.UserRepo;

import java.util.Collections;
import java.util.List;

@Service
public class UserService{
    @Autowired
    UserRepo userRepo;


    public List<User> getAllUsers(){
        return userRepo.findAll();
    }

    public void deleteUser(User user){
        userRepo.delete(user);
    }

    public User saveUser(User user){
        User userFromDb = userRepo.findUserByUsername(user.getUsername());
        if(userFromDb == null){
            user.setRoles(Collections.singleton(new Role(user.getId(),"ROLE_USER")));
            userRepo.save(user);
            return user;
        }
        return null;
    }

    public void updateUser(User user){
        userRepo.save(user);
    }

}

