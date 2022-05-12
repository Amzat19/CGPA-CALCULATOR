export const SemesterIndexes = ({updateSemesterName,
   semestersArray, 
   deleteSemester,
   toggleSemesterModal, 
  editSemester}) => {
    return (
        semestersArray.map((data, index) => {
            const {semesterName} = data;
            // Map over each semester in semesters array's  and return the totalUnits
            const semester = semestersArray[index];
            const numberOfunits = semester.map((course) => parseInt(course.courseUnits))
            const totalUnits = numberOfunits.reduce((a,b) => a + b,0);
            // Map over each semester in semesters array's  and return the GPA.
            const gpa = () => {
              let Gpa = 0;

              const courseGrade = semester.map((course) => {
                if(course.courseScore >= 70) {
                  return Gpa = course.courseUnits * 5;
                } else if(course.courseScore >= 60) {
                  return Gpa = course.courseUnits * 4;
                } else if(course.courseScore >= 50) {
                  return Gpa = course.courseUnits * 3;
                } else if(course.courseScore >= 45) {
                  return Gpa = course.courseUnits * 2;
                } else if(course.courseScore >= 40) {
                  return Gpa = course.courseUnits * 1;
                } else if(course.courseScore <= 39) {
                  return Gpa = course.courseUnits * 0;
                } else {
                  return Gpa;
                }
              })
              const totalGrade = courseGrade.reduce((a,b) => a + b,0);
              const totalUnits = semester.map((course) => {
               return parseInt(course.courseUnits);
              })
              const totalUnitsValue = totalUnits.reduce((a,b) => a + b,0);
              const finalCGPA = (totalGrade / totalUnitsValue).toFixed(2);
               return finalCGPA;
            }
            return (
                <div className="container" key={index}>
                <div className="inner-container">
                    <div className='field'>
                    <p className='control has-icons-left'>
                       <input className='input'
                       type="text"
                       name="semesterName" 
                       value={semesterName} 
                       onChange={(e) => updateSemesterName(index,e)} 
                       placeholder={`Semester ${index + 1}`} />
                           <span className="icon is-small is-left">
                               <i className="fa fa-pencil" aria-hidden="false"></i>
                           </span>
                   </p>
                 </div>
                 <div className="field is-grouped is-grouped-multiline">
                   <div className="control">
                   <div className="tags has-addons">
                     <span className="tag is-dark">Courses</span>
                     <span className="tag is-info">{semestersArray[index].length}</span>
                    </div>
                   </div>
   
                   <div className="control">
                    <div className="tags has-addons">
                       <span className="tag is-dark">TNU</span>
                       <span className="tag is-success">{isNaN(totalUnits) ? 0 : totalUnits}</span>
                   </div>
                   </div>
   
                   <div className="control">
                   <div className="tags has-addons">
                     <span className="tag is-dark">GPA</span>
                     <span className="tag is-primary">{isNaN(gpa()) ? 0.00.toFixed(2) : gpa()}</span>
                   </div>
                   </div>
                   <div className="control">
                     <button key={index} className="button" onClick={() => {
                       editSemester(index);
                       toggleSemesterModal();}}>Edit courses</button>
                   </div>

                   <div>
                 <button className="delete semester-delete" onClick={() => deleteSemester(index)} disabled={index === 0 ? true : false}></button>
                 </div>
                   
                 </div>
                </div>
                 </div>
            )
        })
    )
}