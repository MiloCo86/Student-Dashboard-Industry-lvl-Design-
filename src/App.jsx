import React, { useState } from 'react';
import MainSideBar from './components/MainSideBar';
import MainNavBar from './components/MainNavBar';
import StudentDisplayPanel from './components/StudentDisplayPanel';

import returnSortedCohorts from './utils/filterFunctions'

import data from './data/data.json'

import './styles/App.css';


function App() {

  const [currentData, setCurrentData] = useState([...data]);
  const [title,setTitle] = useState('All Students');

  const sortedCohort = returnSortedCohorts(data);

  function sortEstudents (startDay){
    if(startDay == 'All Students'){
      setCurrentData([...data]);
      setTitle('All Students');
    } else{
      const cohortStartDate = startDay.replace(" ", "");
      const filterData = data.filter(student => student.cohort.cohortCode === cohortStartDate);

      setCurrentData([...filterData]);
      setTitle(startDay);
    }
  }

  return (
    <div className='main_container'>
      <MainSideBar cohortList={sortedCohort} currentCohort={sortEstudents}/>
      <MainNavBar />
      <StudentDisplayPanel title={title} studentData={currentData}/>
    </div>
  );
}

export default App;
