package fr.tse.fise3.poc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import fr.tse.fise3.poc.domain.Role;
import fr.tse.fise3.poc.service.RoleService;

@RestController
@RequestMapping("/api")
public class RoleController {
	
	@Autowired
	RoleService roleService;
	
	@GetMapping("/roles")
	public Iterable<Role> findRoles() {
		return roleService.findAllRoles();
	}
	

}
