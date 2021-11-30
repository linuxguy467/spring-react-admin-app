package codes.matthem.backend.user;

import org.apache.commons.lang3.exception.ExceptionUtils;
import org.springframework.dao.NonTransientDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import lombok.extern.slf4j.Slf4j;

import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.NOT_FOUND;

import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;

import javax.persistence.EntityNotFoundException;

@RestControllerAdvice
@Slf4j
public class UserControllerExceptionHandler {

  @ExceptionHandler(IllegalArgumentException.class)
  @ResponseStatus(BAD_REQUEST)
  public ResponseEntity<String> handleConversion(RuntimeException ex) {
    log.error(ExceptionUtils.getStackTrace(ex));
    return new ResponseEntity<>(ExceptionUtils.getStackTrace(ex), BAD_REQUEST);
  }

  @ExceptionHandler(EntityNotFoundException.class)
  @ResponseStatus(NOT_FOUND)
  public ResponseEntity<String> handleUserNotFound(RuntimeException ex) {
    log.error(ExceptionUtils.getStackTrace(ex));
    return new ResponseEntity<>(ExceptionUtils.getStackTrace(ex), NOT_FOUND);
  }

  @ExceptionHandler(NonTransientDataAccessException.class)
  @ResponseStatus(INTERNAL_SERVER_ERROR)
  public ResponseEntity<String> handleDAException(RuntimeException ex) {
    log.error(ExceptionUtils.getStackTrace(ex));
    return new ResponseEntity<>(ExceptionUtils.getStackTrace(ex), INTERNAL_SERVER_ERROR);
  }
}
