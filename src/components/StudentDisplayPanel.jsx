import Select from "react-select"
import { useState,useEffect } from "react";
import dropMenuStyleTheme from '../styles/dropMenuStyleTheme'
import sortSelectStyles from '../styles/sortSelectStyles'

import StudentMiniCard from "./StudentMiniCard"

import "../styles/StudentDisplayPanel.css"

function StudentDisplayPanel({studentData,title}){
    const [currentData,setCurrentData] = useState(studentData)
    const totalStudents = studentData.length;

    useEffect(()=>{setCurrentData(studentData)},[studentData])

    const selectOptions = [
        {label:'Firts Name', value:'name'},
        {label:'Last Name', value:'last'},
        {label:'Codewards Score', value:'codewards'},
    ]
    function handleSelectChange (event){
        // console.log(event);
    }
    const currentCards = currentData.map((student, idx)=>{      
            return(
                <StudentMiniCard key={idx} student={student} />
            )
        })

    return(
        <div className="student_display_container">
            <div className="student_navbar">
                <h3>{title} <span>({totalStudents})</span></h3>
                <Select
                    defaultValue={{label:'Sort by:', value:'empty'}} 
                    options={selectOptions}
                    onChange={handleSelectChange}
                    theme={dropMenuStyleTheme}
                    styles={sortSelectStyles}
                />
            </div>
            <div className="student_cards_container">
                {currentCards}
            </div>

        </div>
    )
}

export default StudentDisplayPanel;