const sortSelectStyles = {
    control:(styles)=>{
        return{
            ...styles,
            marginRight: '20px',
            width: '145px',
            fontSize: '10px',
            height: '30px',
            minHeight: '30px',
        }
    },
    option:(styles)=>{
        return{
            ...styles,
            borderRadius: '2px',
            fontSize: '10px',
        }
    },
    menu:(styles)=>{
        return{
            ...styles,
            width: '125px',
            borderRadius: '2px',
        }
    },
    valueContainer:(styles)=>{
        return{
            ...styles,
            height: '30px',
        }
    },
    indicatorsContainer:(styles)=>{
        return{
            ...styles,
            height: '30px',
        }
    },
}

export default sortSelectStyles;