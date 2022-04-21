import './index.css';
import gpcalcImg from "./images/gpa-calculator.png";
import{ Row }from './Row';
import { useState } from 'react';

function App() {
  const [row, setRow] = useState([{ 
    courseName: "",
    courseScore: "",
    courseUnits: ""
  }]);

  const addRows = () => {
    const newRow = {
      courseName: "",
      courseScore: "",
      courseUnits: ""
    };
setRow([...row, newRow]);
  };

  const handleChange = (index, e) => {
    const {name,value} = e.target;
    const newRow = [...row];
    newRow[index][name] = value;
    setRow(newRow);
  }

  const calculateGpa = () => {
    let Gpa = 0;

    const courseGrade = row.map((course) => {
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
    const totalGrade = courseGrade.reduce((a,b) => a + b);
    const totalUnits = row.map((course) => {
     return parseInt(course.courseUnits);
    })
    const totalUnitsValue = totalUnits.reduce((a,b) => a + b);
    const finalCGPA = (totalGrade / totalUnitsValue).toFixed(2);
    return finalCGPA;
  };

  const [modalState, setModalstate] = useState(false);
  const active = modalState ? "is-active": "";
  const handleClickModal = () => {
    setModalstate(!modalState);
  };
  return (
    <div className="App">
      <div className='hero'>
        <div className='container'>
        <figure className='image is-128x128 center'>
          <img className="logo" src={gpcalcImg} alt="Gpa Calc logo"></img>
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
              <h1 className='title is-5 has-text-centered'>Input Your Scores</h1>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Score</th>
                    <th>Units</th>
                  </tr>
                </thead>
                <tbody>
                 <Row row={row} handleChange={handleChange} />
                </tbody>
              </table>
              <button className='button' onClick={addRows}>Add Course</button>
              <button className='button' onClick={handleClickModal}>View CGPA</button>

              <div className={`modal ${active}`}>
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">View my CGPA</p>
              <button
                onClick={handleClickModal}
                className="delete"
                aria-label="close"
              />
            </header>
            <section className="modal-card-body">
              <p>Your CGPA is</p>
              <p>{calculateGpa()}</p>
            </section>
            <footer className="modal-card-foot">
              <button onClick={handleClickModal} className="button">
                Close
              </button>
            </footer>
          </div>
        </div>
              
            </div>
          </div>
        </div>
        </div>
      </div>
  );
}

export default App;
