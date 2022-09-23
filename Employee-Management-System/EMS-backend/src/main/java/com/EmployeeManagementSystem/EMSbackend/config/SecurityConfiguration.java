//package com.EmployeeManagementSystem.EMSbackend.config;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//
//import com.EmployeeManagementSystem.EMSbackend.service.UserService;
//
//@SuppressWarnings("deprecation")
//@Configuration
//@EnableWebSecurity
//public class SecurityConfiguration extends WebSecurityConfigurerAdapter  {
//
//	@Autowired
//	private UserService userService;
//	
//	@Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        // TODO Auto-generated method stub
//        auth.userDetailsService(userService);
//    }
//}
