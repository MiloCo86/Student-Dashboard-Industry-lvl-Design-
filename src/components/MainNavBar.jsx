
import "../styles/MainNavBar.css"
import filterSelectStyles from '../styles/filterSelectStyles'
import Select from "react-select"
import dropMenuStyleTheme from '../styles/dropMenuStyleTheme'

import searchIcon from '../assets/Search-icon.png'


function MainNavBar(){

    const selectFilterOptions = [
        {label:'Ready to graduate ', value:'ready'},
        {label:'On track to graduate', value:'onTrack'},
        {label:'tbd', value:'codewards'},
    ]

    function handleSelectChange (event){
        // console.log(event);
    }

    return(
        <div className="main_navbar">
            <div className="main_navbar_filters">
                <Select
                    defaultValue={{label:'Filter Users by:', value:'empty'}} 
                    options={selectFilterOptions}
                    onChange={handleSelectChange}
                    theme={dropMenuStyleTheme}
                    styles={filterSelectStyles}
                />
                <input className="search_input" type="text" placeholder="Search Users" />
                <img className="search_icon" src={searchIcon} />
                    
            </div>
            <div className="main_navbar_userInfo">
                <div>
                    <p><strong>Welcome Back</strong></p>
                    <p>Camilo Paez</p>
                </div>
                <img src="https://wallpapers-clan.com/wp-content/uploads/2022/08/default-pfp-18.jpg" />
            </div>           
        </div>
    )
}

export default MainNavBar;