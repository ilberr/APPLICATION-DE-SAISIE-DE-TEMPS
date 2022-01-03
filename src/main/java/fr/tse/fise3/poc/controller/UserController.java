package fr.tse.fise3.poc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import fr.tse.fise3.poc.domain.User;
import fr.tse.fise3.poc.dto.ChangeUserRoleRequest;
import fr.tse.fise3.poc.dto.ChangeUserRequest;
import fr.tse.fise3.poc.dto.CreateUserRequest;
import fr.tse.fise3.poc.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*", allowedHeaders = "*", maxAge = 200, methods = { RequestMethod.OPTIONS})

public class UserController {

	@Autowired
	private UserService userService;
	
	
	@PostMapping("/create/{idUser}")
	public ResponseEntity<User> createUser(@RequestBody CreateUserRequest createUserRequest,@PathVariable Long idUser){
		return new ResponseEntity<User>(userService.createUser(createUserRequest, idUser),HttpStatus.CREATED);
	}
	
	@PostMapping("/change-role")
	public ResponseEntity<User> changeUserRole(@RequestBody ChangeUserRoleRequest changeUserRoleRequest){
		return new ResponseEntity<User>(userService.changeUserRole(changeUserRoleRequest),HttpStatus.OK);
	}

	
	@PostMapping("/change")
	public ResponseEntity<User> changeAffectationUser(@RequestBody ChangeUserRequest changeUserRequest){
		return new ResponseEntity<User>(userService.changeAffectationForUser(changeUserRequest),HttpStatus.OK);
	}

	@GetMapping("/")
	public Iterable<User> index() {
		return userService.findActiveUsers();
	}

	@PostMapping("/edit")
	public ResponseEntity<User> editUser(@RequestBody User user){
		return new ResponseEntity<User>(userService.editUser(user),HttpStatus.OK);
	}
	
	@GetMapping("/disable/{idUser}")
	public ResponseEntity<User> disableUser(@PathVariable Long idUser){
		return new ResponseEntity<User>(userService.disableUser(idUser),HttpStatus.OK);
	}
	
	@GetMapping("/{idUser}")
	public ResponseEntity<User> getUserInfos(@PathVariable Long idUser){
		return new ResponseEntity<User>(userService.findUser(idUser),HttpStatus.OK);
	}
	
	@GetMapping("/manager/{managerId}")
	public ResponseEntity<List<User>> findAllUsersOfManager(@PathVariable Long managerId){
		return new ResponseEntity<List<User>>(userService.findUsersofManager(managerId),HttpStatus.OK);
	}

}
