package fr.tse.fise3.poc.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import fr.tse.fise3.poc.domain.Project;
import fr.tse.fise3.poc.service.ProjectService;


@RestController
@RequestMapping("/api/projects")
public class ProjectController {
	
	@Autowired 
	private ProjectService projectService;
	
	@GetMapping("/")
	Collection<Project> findAllProjects(){
		return this.projectService.findAllProjects();
	}
	
	@PostMapping("/{username}")
	Project createTask(@RequestBody Project project,@PathVariable String username) {
		return this.projectService.createProject(project,username);
	}
}
