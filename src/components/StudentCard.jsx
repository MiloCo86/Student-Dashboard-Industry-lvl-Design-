import formatBirthday from '../utils/formatBirthday';
import closeIcon from "../assets/Xmark-icon.png"

function StudentCard({student}){

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
                    <img className='close_icon' src={closeIcon}/>
                </div>

                <div className="extra_info">
                    <div>
                        <h6>Codewards:</h6>
                        <p><span>Current Total:</span> {student.codewars.current.total}</p>
                        <p><span>Last Week:</span> {student.codewars.current.lastWeek}</p>
                        <p><span>Goal:</span> {student.codewars.goal.total}</p>
                        <p><span>Percent of Goal Achieved:</span> {goalPercent}%</p>
                    </div>
                    <div>
                        <h6>Scores:</h6>
                        <p><span>Assignments:</span> {scAssignments}%</p>
                        <p><span>Projects:</span> {scProjects}%</p>
                        <p><span>Assessments:</span> {scAssessments}%</p>
                    </div>
                    <div>
                        <h6>Certifications:</h6>
                        <p><span>Resume:</span> {certResume}</p>
                        <p><span>LinkedIn:</span> {certlinkedin}</p>
                        <p><span>Mock Interview:</span> {certMockInterview}</p>
                        <p><span>GitHub:</span> {certGitHub}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentCard;