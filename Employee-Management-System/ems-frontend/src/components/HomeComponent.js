import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom' //Link 
import EmployeeService from '../services/EmployeeService'

const HomeEmployeeComponent = () => {

    const [ setEmployees] = useState([])

    useEffect(() => {
        getAllEmployees();
    }, [])

    const getAllEmployees = () => { //this is for deletion of the code..we create a method and put the above values here
        EmployeeService.getAllEmployees().then((response) => { // this is the class from EmployeeService and the getMethod
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='container'><br />
            <h2 className='text-center'>Welcome to <span id='headcolor'> EMPLOYEE MANAGEMENT SYSTEM</span></h2><br />

            <Link to = "/employee" className = "btn btn-primary mb-2">View Details</Link>

        </div>
    )
}

export default HomeEmployeeComponent;