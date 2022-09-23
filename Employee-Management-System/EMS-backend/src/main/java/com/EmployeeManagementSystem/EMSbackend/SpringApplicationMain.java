package com.EmployeeManagementSystem.EMSbackend;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
//import org.springframework.security.crypto.password.NoOpPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;

import com.EmployeeManagementSystem.EMSbackend.model.Employee;
import com.EmployeeManagementSystem.EMSbackend.repository.EmployeeRepository;

@SpringBootApplication
public class SpringApplicationMain implements CommandLineRunner {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		SpringApplication.run(SpringApplicationMain.class, args);
	}

	@Autowired
	private EmployeeRepository employeeRepository;
	
//	@SuppressWarnings("deprecation")
//	@Bean
//	public PasswordEncoder PasswordEncoder() { 		// here we use the simple password encoder
//		return NoOpPasswordEncoder.getInstance() ;
//	}
//	
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		
		/*
		 * Employee employee = new Employee(); //inserting the values
		 * employee.setFname("Shinto"); employee.setLname("Chandy");
		 * employee.setEmail("shinto@gmail.com"); employee.setJob("Developer");
		 * employeeRepository.save(employee);
		 */
			
	}

}
