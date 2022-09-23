package com.EmployeeManagementSystem.EMSbackend.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.EmployeeManagementSystem.EMSbackend.exceptions.ResourceNotFound;
import com.EmployeeManagementSystem.EMSbackend.model.Employee;
import com.EmployeeManagementSystem.EMSbackend.repository.EmployeeRepository;


//@CrossOrigin(origins = {"http://localhost:3000/"}) // here we add this crossOrigin to connect the react and spring to run in same port OR 
												   // we can put a @CrossOrigin(*) ...which give access to all clients.
@CrossOrigin("*") //giving access to all clients
@RestController
@RequestMapping("api/v1/employees") // this will return the list of emp
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepository;

	@GetMapping() // making it http
	public List<Employee> getAllEmployees(){ //get employee details
		return employeeRepository.findAll();
	}
	
	
	@PostMapping //create employee rest A4PI
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	
	
	//build get employee by id REST API
	
	@GetMapping("{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable long id){
		Employee employee  = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFound("Employee not exist with this ID" +id));
		return ResponseEntity.ok(employee);
	}
	
	//update Employee REST API
	
	@PutMapping("{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable long id, @RequestBody Employee employeeDetails){
		Employee updateEmployee  = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFound("Employee not exist with this ID" +id));

		updateEmployee.setFname(employeeDetails.getFname());
		updateEmployee.setLname(employeeDetails.getLname());
		updateEmployee.setEmail(employeeDetails.getEmail());
		updateEmployee.setJob(employeeDetails.getJob());
		
		employeeRepository.save(updateEmployee);
		
		return ResponseEntity.ok(updateEmployee);
	}
	
	//build delete employee REST API
	@DeleteMapping("{id}") //making this method as a REST API by giving the annotation 
	public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id){
		
		Employee deleteEmployee  = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFound("Employee not exist with this ID" +id));
		
		employeeRepository.delete(deleteEmployee);
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);

	}
}
