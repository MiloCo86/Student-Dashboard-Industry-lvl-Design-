const filterSelectStyles = {
    control:(styles)=>{
        return{
            ...styles,
            marginLeft: '20px',
            width: '190px',
            fontSize: '13px',
            height: '30px',
            minHeight: '30px',
        }
    },
    option:(styles)=>{
        return{
            ...styles,
            borderRadius: '2px',
            fontSize: '13px',
        }
    },
    menu:(styles)=>{
        return{
            ...styles,
            width: '165px',
            borderRadius: '2px',
            marginLeft: '20px',
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

export default filterSelectStyles