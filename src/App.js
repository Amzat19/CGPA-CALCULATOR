import './index.css';
import gpcalcImg from "./images/gpa-calculator.png";
import{ Semester }from './Semester';
import {useEffect, useState } from 'react';
import { Modal } from './CGPAModal';
import { SemestersModal } from './SemestersModal';
import { SelectSemester } from './SelectSemester';


function App() {
  const initialState = { 
    courseName: "",
    courseScore: "",
    courseUnits: ""
  };

  const initialSemesterRowState =  [{
    courseName: "",
    courseScore: "",
    courseUnits: ""
  }];

  const [activeSemesterState, setActiveSemesterState] = useState(0);
  const [semestersArray, setSemestersArray] = useState([initialSemesterRowState]);
  const [semester, setSemester] = useState(semestersArray[activeSemesterState]);
  
  const addNewCourses = () => {
    const newCourse = {
    courseName: "",
    courseScore: "",
    courseUnits: ""
    };
    const newSemesterContent = [...semester, newCourse];
    let newSemestersArray = [...semestersArray];
    newSemestersArray[activeSemesterState] = newSemesterContent;
    setSemestersArray(newSemestersArray);
  };

  useEffect(() => {
    setSemester(semestersArray[activeSemesterState]);
  },[activeSemesterState,semestersArray]);
  
  const updateRows = (index, e) => {
    const {name,value} = e.target;
    const newSemester = [...semester];
    newSemester[index][name] = value;
    setSemester(newSemester);
  };

  const addNewSemester = () => {
  setSemestersArray([...semestersArray, [initialState]]);
 };

const changeSemester = (e) => {
    const {value} = e.target;
    setActiveSemesterState(value);
  };

  const editSemester = (index) => {
    setActiveSemesterState(index)
  };

const deleteCourse = (index) => {
  const semesterCourses = [...semester];
  semesterCourses.splice(index, 1);
  let newSplicedSemesterArray = [...semestersArray];
  newSplicedSemesterArray[activeSemesterState] = semesterCourses; 
  setSemestersArray(newSplicedSemesterArray); 
};

  const calculateGpa = () => {
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
    });
    const totalGrade = courseGrade.reduce((a,b) => a + b,0);
    const totalUnits = semester.map((course) => {
     return parseInt(course.courseUnits);
    })
    const totalUnitsValue = totalUnits.reduce((a,b) => a + b,0);
    const finalCGPA = (totalGrade / totalUnitsValue).toFixed(2);
    return finalCGPA
  };

  const [CGPAModalState, setCGPAModalState] = useState(false);
    const active = CGPAModalState ? "is-active": "";
    const toggleModal = () => {
      setCGPAModalState(!CGPAModalState);
    };

    const [semesterModalState, setSemesterModalstate] = useState(false);
    const activeSemester = semesterModalState ? "is-active": "";
    const toggleSemesterModal = () => {
      setSemesterModalstate(!semesterModalState);
    };

    const [semesterIndex, setSemesterIndex] = useState([{ semesterName: "" }]);
    const addNewSemesterIndex = () => {
    const newSemester = { semesterName: "" }
    setSemesterIndex([...semesterIndex, newSemester]);
  };

  const updateSemesterName = (index,e) => {
    const {name,value} = e.target;
    const semestersIndex = [...semesterIndex];
    semestersIndex[index][name] = value;
    setSemesterIndex(semestersIndex);
  };

  const deleteSemester = (index) => {
    const semesterIndexes = [...semesterIndex];
    semesterIndexes.splice(index, 1);
    setSemesterIndex(semesterIndexes);
    const newSplicedSemestersArray = [...semestersArray];
    newSplicedSemestersArray.splice(index, 1)
    setSemestersArray(newSplicedSemestersArray);
  };

  return (
    <div className="App">
      <div className='hero'>
        <div className='container'>
        <figure className='image is-128x128 center'>
          <img src={gpcalcImg} alt="Gpa Calc logo"></img>
        </figure>
      </div>
      </div>
      
      <div className='app-content'>
        <div className='top-content'>
          <h1 className='title is-6 has-text-white'>CGPA CALCULATOR</h1>
          <h2 className='subtitle is-6 has-text-white'>Easily calculate your CGPA and keep track of your academic progress</h2>
        </div>
        <div className='card'>
          <div className='card-header'>
            <h1 className='card-header-title is-5'>Compute Your CGPA</h1>
          </div>
          <div className='card-content'>
            <div className='content'>
              <div>
                <p>Edit,Change or Add a new semester </p>
                <div className='buttons'>
                <div className="select">
                  <select value={activeSemesterState} onChange={changeSemester}>
                    <option>Select dropdown</option>
                    <SelectSemester semesterIndex={semesterIndex}/>
                  </select>
                 </div>
               <div>
                 <button className='button' onClick={toggleSemesterModal}>
                   <span className="icon is-small">
                   <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                  </span>
                 </button>
                </div>
                </div>
                <SemestersModal 
                toggleSemesterModal={toggleSemesterModal}
                activeSemester={activeSemester} 
                updateSemesterName={updateSemesterName} 
                semester={semester}
                addNewSemesterIndex={addNewSemesterIndex}
                addNewSemester={addNewSemester}
                semestersArray={semestersArray}
                deleteSemester={deleteSemester}
                editSemester={editSemester}/>
              </div>
              <h1 className='title is-5 has-text-centered'>Input Your Scores</h1>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Score</th>
                    <th>Units</th>
                    <th>X</th>
                  </tr>
                </thead>
                <tbody>
                 <Semester semester={semester} updateRows={updateRows} deleteCourse={deleteCourse}/>
                </tbody>
              </table>
              <button className='button' onClick={addNewCourses}>Add Course</button>
              <button className='button' onClick={toggleModal}>View CGPA</button>
              <Modal calculateGpa={calculateGpa} toggleModal={toggleModal} active={active}  />
            </div>
          </div>
        </div>
        <footer className='footer'>
            <div className='content has-text-centered'>
              <p>Coded by <strong>Amzat</strong></p>
            </div>
          </footer>
        </div>
      </div>
  );
}

export default App;
