import React from 'react'
import Button from "react-bootstrap/Button"

const Employee = (props) => {

    return <div style={{color: 'FFF', padding: '20px 30px'}}>
        <div className='pt-5'>
        <div className='card m-auto' style={{backgroundColor:'#FAEBD7', width: 400}}>
        <img src={props.data.photo}></img>
        <div className='card-body' style={{color:'black'}}>
        <p>{props.data.name}</p>
        <p>Department: {props.data.department}</p>
        <p>Start Date: {props.data.startDate}</p>
        <p>Role: {props.data.role}</p>
        <p>ID#: {props.data.id}</p>
        </div>
        </div>
       <div className='button pt-4'>
        <Button style={{backgroundColor:'black'}} onClick={props.resetState}>Back to List</Button></div>
        </div>
    </div>;

};

export default Employee; 