import React, { useState, useEffect } from 'react' // here import both Hooks
import { Link } from 'react-router-dom' //Link 
import EmployeeService from '../services/EmployeeService'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]) //this is the useState Hook 


    // Similar to componentDidMount and componentDidUpdate:---this is the useEffect Hook
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

    const deleteEmployee = (EmployeeId) => { //defining the delete button
        //console.log(EmployeeId);
        EmployeeService.deleteEmployeeById(EmployeeId).then((response) => {
            getAllEmployees(); //here we call the above delete method...

        }).catch(error => {
            console.log(error);
        })
    }


    //below we write the JSX code...
    return (
        <div className='container'><br/>
            
            <h2 className='text-center'>List Employees</h2><br />

            <Link to = "/add-employee" className = "btn btn-primary mb-2">ADD EMPlOYEE</Link>

            <table className='table table-bordered table-striped'>
                <thead>
                    <th>Employee ID</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email ID</th>
                    <th>Employee JOB</th>

                    <th> Actions </th> {/* for updating process */}
                </thead>

                <tbody>
                    {
                        employees.map( /* here we write the JSX to get the employee details i.e within this { ...} */
                            //below arrow fun code is for get the table data..

                            /* below give the id based on the var we created in our model */
                            employee =>
                                <tr key={employee.id}> 
                                    <td>{employee.id}</td>
                                    <td>{employee.fname}</td>
                                    <td>{employee.lname}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.job}</td>
                                    <td>
                                        <Link className = "btn btn-info" to = {`/edit-employee/${employee.id}`}>Update</Link>
                                        <button className='btn btn-danger' onClick={() => deleteEmployee(employee.id)} 
                                        style = {{marginLeft:"10px"}}>Delete</button> 
                                    </td>
                                </tr>
                        )

                    }
                </tbody>
            </table>
        </div>
    )
}
export default ListEmployeeComponent;

