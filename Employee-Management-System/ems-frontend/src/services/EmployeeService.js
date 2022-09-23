// here is the area we are going to connect the REST API ..for that we use the AXIOS library

import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/employees'

class EmployeeService {
    
    getAllEmployees(){ //getting all emp
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }

    createEmployee(employee){ // for creation, put this method name inside the addEmpComp to store value get from the FORM submit
      return axios.post(EMPLOYEE_BASE_REST_API_URL, employee)
    }

    getEmployeeById(employeeId){ //for updating the employee details inordr to get the id
        return axios.get(EMPLOYEE_BASE_REST_API_URL + '/'+ employeeId)
    }

    updateEmployee(employeeId, employee){ //for updating the value
        return axios.put(EMPLOYEE_BASE_REST_API_URL + "/" + employeeId, employee);
    }

    deleteEmployeeById(employeeId){ //for delete.. got to listemplComp to add btn
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + "/" + employeeId);
    }
}

export default new EmployeeService(); //here we can directly call obj in a component 