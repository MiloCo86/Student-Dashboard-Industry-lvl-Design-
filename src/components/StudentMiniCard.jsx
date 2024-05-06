import "../styles/StudentMiniCard.css"
import formatBirthday from '../utils/formatBirthday'
import resizeIcon from "../assets/Resize-icon.png"


function StudentMiniCard({student}){

    const birthday = formatBirthday(student.dob)

    return (
        <div className="mini_card">
            <img className="resize_icon" src={resizeIcon} />
            <img className="profile_pic" src={student.profilePhoto} />
            <h4>{student.names.preferredName} {student.names.surname}</h4>
            <p>{student.username}</p>
            <p>Birthday: {birthday}</p>
            <button>More Details</button>
        </div>
    )
}

export default StudentMiniCard;