import formatBirthday from '../utils/formatBirthday';
import closeIcon from "../assets/Xmark-icon.png"

import "../styles/StudentCard.css"

function StudentCard({student, closeCard}){

    const birthday = formatBirthday(student.dob)
    const cwCurrentTotal = Number(student.codewars.current.total);
    const cwGoal = Number(student.codewars.goal.total);
    const goalPercent = Math.floor((100*cwCurrentTotal)/cwGoal);

    const scAssignments = Math.floor(Number(student.cohort.scores.assignments)*100);
    const scProjects = Math.floor(Number(student.cohort.scores.projects)*100);
    const scAssessments = Math.floor(Number(student.cohort.scores.assessments)*100);

    const certResume = student.certifications.resume ? '✔️':'❌';
    const certlinkedin = student.certifications.linkedin ? '✔️':'❌';
    const certMockInterview = student.certifications.mockInterview ? '✔️':'❌';
    const certGitHub = student.certifications.github ? '✔️':'❌';

    return (
        <div className="student_card_container">
            <div className="overlay"></div>
            <div className="student_card">
                <div className="student_info">
                    <img className="profile_pic" src={student.profilePhoto} />
                    <div className="basic_info">
                        <h4>{student.names.preferredName} {student.names.surname}</h4>
                        <p>{student.username}</p>
                        <p>Birthday: {birthday}</p>
                    </div>
                    <img onClick={closeCard} className='close_icon' src={closeIcon}/>
                </div>

                <div className="extra_info">
                    <div>
                        <h6>Codewards:</h6>
                        <p>Current Total: {student.codewars.current.total}</p>
                        <p>Last Week: {student.codewars.current.lastWeek}</p>
                        <p>Goal: {student.codewars.goal.total}</p>
                        <p>Percent of Goal Achieved: {goalPercent}%</p>
                    </div>
                    <div>
                        <h6>Scores:</h6>
                        <p>Assignments: {scAssignments}%</p>
                        <p>Projects: {scProjects}%</p>
                        <p>Assessments: {scAssessments}%</p>
                    </div>
                    <div>
                        <h6>Certifications:</h6>
                        <p>Resume: {certResume}</p>
                        <p>LinkedIn: {certlinkedin}</p>
                        <p>Mock Interview: {certMockInterview}</p>
                        <p>GitHub: {certGitHub}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentCard;