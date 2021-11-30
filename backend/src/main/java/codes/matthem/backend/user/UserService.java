package codes.matthem.backend.user;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
  @Autowired private UserRepository repository;

  public List<User> getAllUsers() {
    return repository.findAll();
  }

  public User getUser(Long id) {
    return repository.findById(id).orElseThrow(() -> new EntityNotFoundException());
  }

  public User createUser(User user) {
    return repository.saveAndFlush(user);
  }

  public User updateUser(User user) {
    if (user.getId() == null) {
      throw new IllegalArgumentException("the given id must not be null!");
    }

    User oldUser = repository.findById(user.getId()).orElseThrow(() -> new EntityNotFoundException());
    oldUser.setName(user.getName());
    oldUser.setEmail(user.getEmail());
    oldUser.setPassword(user.getPassword());

    return repository.save(oldUser);
  }

  public Long deleteUser(Long id) {
    repository.deleteById(id);
    return id;
  }
}
