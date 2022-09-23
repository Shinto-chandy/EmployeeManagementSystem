package com.EmployeeManagementSystem.EMSbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.EmployeeManagementSystem.EMSbackend.model.Employee;
import com.EmployeeManagementSystem.EMSbackend.repository.EmployeeRepository;

@RestController
@RequestMapping("api/v1/home")
public class HomeController {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@GetMapping("/")
	public List<Employee> home() {
		return employeeRepository.findAll();
	}

}
