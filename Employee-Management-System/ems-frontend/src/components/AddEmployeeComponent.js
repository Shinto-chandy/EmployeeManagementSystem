import React, { useState, useEffect } from 'react' //rafce 
import { Link, useNavigate, useParams } from 'react-router-dom' //useHistroy Hook to get the history to navigate, useParam is a new type of hook for Updation process
import EmployeeService from '../services/EmployeeService'

const AddEmployeeComponent = () => {

    const [fname, setfname] = useState('') //adding react hook for get the data when user submit the form
    const [lname, setlname] = useState('')
    const [email, setemail] = useState('')
    const [job, setjob] = useState('')


    const {id} = useParams(); //for UPDATION..retrieving id from the url


    const navigate = useNavigate(); // used to navigate to the list employee page

    //we change the below method..to perform te updation also in a single item..and pu this method on button area
    const saveOrUpdateEmployee = (e) => { //method to save the details while button is pressed
        e.preventDefault();

        const employee = {fname, lname, email, job}


        if(id){
            EmployeeService.updateEmployee(id, employee).then((response) => {

                navigate('/employees') //once the user update the user navigate to the employee list page
            
            }).catch(error => {
                console.log(error);
            })
        }else {
            EmployeeService.createEmployee(employee).then((response) => { //giving the data to the REST API for storing into the DB
                console.log(response.data)
    
                navigate('/employees') // this will push user to the list Employee page to see the current history
    
            }).catch(error => {
                console.log(error);
            })
        }
        
    }


    // below useEffect is for Updating the values...

    useEffect(() => { //import on top
      EmployeeService.getEmployeeById(id).then((response) => {
        setfname(response.data.fname);
        setlname(response.data.lname);
        setemail(response.data.email);
        setjob(response.data.job);
      }).catch(error => {
        console.log(error)
      })

    }, [ ])//[ we don't have any dependencies, that why it is empty]
    

    // it is used to change the title dynamically when both UPDATE and ADD Happen 
    // call the title() inside the form...
    const title = () => {
        if(id){
            return <h2 className='text-center'>UPDATE EMPLOYEE</h2>
        }else{
            return <h2 className='text-center'>ADD EMPLOYEE</h2>
        }
    }



    return (
        <div>
            {/* go to the list emp comp to add a button */}
            <br/><br/>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        {
                            title() //we call it here, to change the title of both cases (update and ADD)
                        }
                        {/*<h2 className='text-center'>ADD EMPLOYEE</h2>*/}
                        <div className='card-body'>

                            <form>
                                <div className='form-group-mb-2'>
                                    <label className='form-label'>First Name: </label>
                                    <input type="text"
                                        placeholder='Enter First Name'
                                        name='fname'
                                        className='form-control'
                                        value={fname} 
                                        onChange={(e) => setfname(e.target.value)}
                                        required
                                    >
                                    </input>
                                </div><br/>

                                <div className='form-group-mb-2'>
                                    <label className='form-label'>Last Name: </label>
                                    <input type="text"
                                        placeholder='Enter Last Name'
                                        name='lname'
                                        className='form-control'
                                        value={lname} 
                                        onChange={(e) => setlname(e.target.value)}
                                        required
                                    >
                                    </input>
                                </div><br/>

                                <div className='form-group-mb-2'>
                                    <label className='form-label'>Email ID: </label>
                                    <input type="emil"
                                        placeholder='Enter Email ID'
                                        name='email'
                                        className='form-control'
                                        value={email} 
                                        onChange={(e) => setemail(e.target.value)}
                                        required
                                    >
                                    </input>
                                </div><br/>

                                <div className='form-group-mb-2'>
                                    <label className='form-label'>Job Role: </label>
                                    <input type="text"
                                        placeholder='Enter Job Role'
                                        name='job'
                                        className='form-control'
                                        value={job} 
                                        onChange={(e) => setjob(e.target.value)}
                                        required
                                    >
                                    </input>
                                </div><br/>

                                <button id ="btn-space" className='btn btn-success' onClick={(e) => saveOrUpdateEmployee(e)}>Submit</button>
                                <Link to= "/employees" className='btn btn-danger '>Cancel</Link>
                            </form>

                        </div><br/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddEmployeeComponent