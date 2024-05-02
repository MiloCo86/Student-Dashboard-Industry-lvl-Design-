
import "../styles/MainNavBar.css"
import Select from "react-select"


function MainNavBar(){

    const selectOptions = [
        {label:'Firts Name', value:'name'},
        {label:'Last Name', value:'last'},
        {label:'Codewards Score', value:'codewards'},
    ]

    function handleSelectChange (event){
        // console.log(event);
    }

    return(
        <div className="main_navbar">
            <div className="main_navbar_filters">
                <Select
                    defaultValue={{label:'Filter Users by:', value:'empty'}} 
                    options={selectOptions}
                    onChange={handleSelectChange}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 20,
                        colors: {
                          ...theme.colors,
                          primary50: '#5effd1',
                          primary25: '#a8fde5',
                          primary: '#21d19f',
                        },
                      })}
                    styles={{
                        control:(styles)=>{
                            return{
                                ...styles,
                                marginLeft:20,
                                width: 200,
                            }
                        },
                    }}
                />
                <input className="search_input" type="text" placeholder="Search Users" />
                <p className="search_icon">🔍</p>
                    
            </div>
            <div className="main_navbar_userInfo">
                <p>Camilo Paez</p>
                <img src="https://wallpapers-clan.com/wp-content/uploads/2022/08/default-pfp-18.jpg" />
            </div>           
        </div>
    )
}

export default MainNavBar;