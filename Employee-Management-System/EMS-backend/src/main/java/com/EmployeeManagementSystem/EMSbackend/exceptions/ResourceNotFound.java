package com.EmployeeManagementSystem.EMSbackend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND) //created a custom exception
public class ResourceNotFound extends RuntimeException {

	public ResourceNotFound(String message) {
		super(message);
	}
}
