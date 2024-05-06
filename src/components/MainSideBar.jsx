
import "../styles/MainSideBar.css"

function MainSideBar({cohortList, currentCohort}){


    const CohortList = cohortList.map((cohort,idx)=>{
        return (
            <li key={idx} onClick={()=>currentCohort(cohort)}><p>{cohort}</p></li>
        )
    })

    return(
        <div className="side_bar">
            <h2>Pursuit</h2>
            <ul>
                <li onClick={()=>currentCohort('All Students')}><p>All Students</p></li>
                {CohortList}
            </ul>
        </div>
    )
}

export default MainSideBar;