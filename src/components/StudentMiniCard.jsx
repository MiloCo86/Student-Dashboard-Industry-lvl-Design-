import StudentCard from "./StudentCard"

import "../styles/StudentMiniCard.css"
import formatBirthday from '../utils/formatBirthday'
import resizeIcon from "../assets/Resize-icon.png"
import { useState } from "react"


function StudentMiniCard({student}){

    const birthday = formatBirthday(student.dob)

    const [showFullCard,setShowFullCard] = useState(false)

    function ShowCard(){
        setShowFullCard(!showFullCard);
    }
    

    return (
        <div className="mini_card">
            <img className="resize_icon" src={resizeIcon} />
            <img className="profile_pic" src={student.profilePhoto} />
            <h4>{student.names.preferredName} {student.names.surname}</h4>
            <p>{student.username}</p>
            <p>Birthday: {birthday}</p>
            <button onClick={ShowCard}>More Details</button>
            {showFullCard && <StudentCard student={student} closeCard={ShowCard}/>}
        </div>
    )
}

export default StudentMiniCard;