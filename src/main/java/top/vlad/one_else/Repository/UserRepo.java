package top.vlad.one_else.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import top.vlad.one_else.Entities.User;

public interface UserRepo extends JpaRepository<User, Long> {
    User findUserByUsername(String username);
    User findUserByEmail(String email);
}
