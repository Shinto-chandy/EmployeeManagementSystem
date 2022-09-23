package com.EmployeeManagementSystem.EMSbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.EmployeeManagementSystem.EMSbackend.model.Employee;

//@Repository - no need, see note
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
	
	// get all CRUD methods to interact with DB automaticaly
	
}
