package top.vlad.one_else.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import top.vlad.one_else.Entities.Role;
import top.vlad.one_else.Entities.User;
import top.vlad.one_else.Repository.UserRepo;

import java.util.Collections;
import java.util.List;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    UserRepo userRepo;
    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;


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

    public boolean saveUser(User user){
        User userFromDb = userRepo.findUserByUsername(user.getUsername());
        if(userFromDb != null)
            return false;
        user.setRoles(Collections.singleton(new Role("ROLE_USER")));
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userRepo.save(user);
        return true;
    }

    public void updateUser(User user){
        userRepo.save(user);
    }

    public User findUserByUsername(String username){
        return userRepo.findUserByUsername(username);
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = findUserByUsername(username);
        if(user == null)
            throw new UsernameNotFoundException("User with username - " + username + " not found!");
        return user;
    }
}

