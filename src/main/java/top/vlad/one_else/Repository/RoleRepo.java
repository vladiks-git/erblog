package top.vlad.one_else.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import top.vlad.one_else.Entities.Role;

public interface RoleRepo extends JpaRepository<Role, Long> {
}
