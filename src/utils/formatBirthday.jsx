const formatBirthday = (oldFormat) =>{
    let birthday = '';
    const birthdayArray = oldFormat.split('/');
    if (birthdayArray[0]=='1') birthday ='Janaury';
    if (birthdayArray[0]=='2') birthday ='February';
    if (birthdayArray[0]=='3') birthday ='March';
    if (birthdayArray[0]=='4') birthday ='April';
    if (birthdayArray[0]=='5') birthday ='May';
    if (birthdayArray[0]=='6') birthday ='June';
    if (birthdayArray[0]=='7') birthday ='July';
    if (birthdayArray[0]=='8') birthday ='August';
    if (birthdayArray[0]=='9') birthday ='September';
    if (birthdayArray[0]=='10') birthday ='October';
    if (birthdayArray[0]=='11') birthday ='November';
    if (birthdayArray[0]=='12') birthday ='December';
    birthday += ' '+birthdayArray[1]+', '+birthdayArray[2];
    return birthday
}

export default formatBirthday;