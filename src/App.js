import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import Employee from './Components/Employee';
import Employees from './Components/Employees';
import Loading from './Components/Loading';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

const[loading, setLoading] = useState(true);
const[employeeData, setEmployeeData] = useState ([]);
const[selectedEmployee, setSelectedEmployee] = useState(null);
const resetState = () => {
  setEmployeeData([]);
  setSelectedEmployee(null);
  setLoading(true);
  getEmployeeData();
}

const getEmployeeData = (id = null) => {
  setLoading(true);

  let actualId = ' ';
  if(!!id && parseInt(id, 10) > 0) {
    actualId = parseInt(id,10)
  }

  axios.get(`https://api.matgargano.com/employees/${actualId}`).then(response => {
  setEmployeeData(response.data);
  setLoading(false);


  })
}

useEffect (() => {
      getEmployeeData();
}, []);

useEffect(() => {

  if(!!selectedEmployee){
    getEmployeeData(selectedEmployee);
  }

}, [selectedEmployee])

  return (
    <div className="App">

      {!!loading && <Loading />}
      {!loading && <div> 
        
      {/* list of Employees */}
      {!selectedEmployee && <Employees setSelectedEmployee={setSelectedEmployee} data={employeeData} />}

      {/* Individual List of Employees */}
      {!!selectedEmployee && <Employee resetState={resetState} data = {employeeData} />}

      </div>}


    </div>
  );
}

export default App;
