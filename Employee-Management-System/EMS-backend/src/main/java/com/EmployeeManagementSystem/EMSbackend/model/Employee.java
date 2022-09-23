package com.EmployeeManagementSystem.EMSbackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name= "employees")
public class Employee {

	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY) //we need to provide the pk genreation stratergy...
	private long id; //PK
	
	@Column(name = "first_name")
	private String fname;
	
	@Column(name = "last_name")
	private String lname;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "job") //giving this annotation to specify JPA default will pickup the name to create the column
	private String job;
	
	
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Employee(long id, String fname, String lname, String email, String job) {
		super();
		this.id = id;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.job = job;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}
}
