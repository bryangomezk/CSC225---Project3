import React from 'react'
import './Employees.css'

const Employees = (props) => {

    const updateEmployee = (employeeId) => {
        props.setSelectedEmployee(employeeId);
    }

    return <div style={{padding:'20px 10px'}} >{
        
        props.data.map(employee => {

            return <p onClick={() => {updateEmployee(employee.id) }}  style={{cursor:'pointer'}} role="button">
                
                {employee.name} <br></br>
                {employee.department} Department<br></br>
                ID#: {employee.id}
               
             </p>

        })

     } </div>;

}

export default Employees;