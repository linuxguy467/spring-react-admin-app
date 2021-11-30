package codes.matthem.backend.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/users")
@CrossOrigin
public class UserController {
  @Autowired private UserService userService;
    
  @GetMapping("/")
  public List<User> getAllUsers() {
    return userService.getAllUsers();
  }

  @GetMapping("/{id}")
  public User getUser(@PathVariable("id") Long id) {
    return userService.getUser(id);
  }

  @PostMapping("/")
  public User createUser(@RequestBody User user) {
    return userService.createUser(user);
  }

  @PutMapping("/")
  public User updateUser(@RequestBody User user) {
    return userService.updateUser(user);
  }

  @DeleteMapping("/{id}")
  public Long deleteUser(@PathVariable("id") Long id) {
    return userService.deleteUser(id);
  }
}
