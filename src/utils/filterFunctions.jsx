function returnSortedCohorts (data) {
    //1 sort the array by cohort Start Date
    const sortedArr = data.sort((a, b) => Date.parse(a.cohort.cohortStartDate) -Date.parse(b.cohort.cohortStartDate));
  
    //2 create 2 arrays, the first array will included only 1 diferent element base on: "cohortCode", the second array will have the "cohortCode including the space" 
    const cohortArr = [];
    const formatedArr = [];
  
    sortedArr.forEach((st) => {
      //check if cohortArr have a string with the cohortcode, if not will be add to that array
      if (!cohortArr.includes(st.cohort.cohortCode)) {
        //adding a space before the first "2"
        let formatedCohort = st.cohort.cohortCode.replace('2',' 2');
        
        cohortArr.push(st.cohort.cohortCode); 
        formatedArr.push(formatedCohort);
      }
    });
  
    return formatedArr.reverse();
  };


  export default returnSortedCohorts