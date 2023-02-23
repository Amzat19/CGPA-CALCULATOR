import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const initialRow = {
    courseName: '',
    courseScore: '',
    courseUnits: '',
  };

  const [activeSemesterIndex, setActiveSemesterIndex] = useState(0);
  const [allSemestersArray, setAllSemestersArray] = useState([[initialRow]]);
  const [semester, setSemester] = useState(
    allSemestersArray[activeSemesterIndex]
  );
  const semestersGPAArray = [];
  const [preferredScale, setPreferredScale] = useState(5);
  const [showSemesterModal, setShowSemesterModal] = useState(false);
  const [showGPAModal, setShowGPAModal] = useState(false);
  const [showCGPAModal, setShowCGPAModal] = useState(false);
  const [semesterIndex, setSemesterIndex] = useState([{ semesterName: '' }]);

  const toggleSemesterModal = () => setShowSemesterModal(!showSemesterModal);
  const toggleGPAModal = () => setShowGPAModal(!showGPAModal);
  const toggleCGPAModal = () => setShowCGPAModal(!showCGPAModal);

  const addNewCourses = () => {
    const newCourse = {
      courseName: '',
      courseScore: '',
      courseUnits: '',
    };
    const newSemesterContent = [...semester, newCourse];
    const newSemestersArray = [...allSemestersArray];
    newSemestersArray[activeSemesterIndex] = newSemesterContent;
    setAllSemestersArray(newSemestersArray);
  };

  const updateRows = (index, e) => {
    const { name, value } = e.target;
    const newSemester = [...semester];
    newSemester[index][name] = value;
    setSemester(newSemester);
  };

  const addNewSemester = () => {
    setAllSemestersArray([...allSemestersArray, [initialRow]]);
  };

  const changeActiveSemester = (e) => {
    const { value } = e.target;
    setActiveSemesterIndex(value);
  };

  const deleteCourse = (index) => {
    const semesterCourses = [...semester];
    semesterCourses.splice(index, 1);
    const newSplicedSemesterArray = [...allSemestersArray];
    newSplicedSemesterArray[activeSemesterIndex] = semesterCourses;
    setAllSemestersArray(newSplicedSemesterArray);
  };

  const changeScale = (e) => {
    const { name } = e.target;
    setPreferredScale(parseInt(name));
  };

  const semesterGpa = (currentSemester) => {
    let Gpa = 0;

    const gradeScale4 = currentSemester.map((course) => {
      if (course.courseScore >= 70) {
        return (Gpa = course.courseUnits * 4);
      }
      if (course.courseScore >= 60) {
        return (Gpa = course.courseUnits * 3);
      }
      if (course.courseScore >= 50) {
        return (Gpa = course.courseUnits * 2);
      }
      if (course.courseScore >= 40) {
        return (Gpa = course.courseUnits * 1);
      }
      if (course.courseScore <= 39) {
        return (Gpa = course.courseUnits * 0);
      }
      return Gpa;
    });

    const gradeScale5 = currentSemester.map((course) => {
      if (course.courseScore >= 70) {
        return (Gpa = course.courseUnits * 5);
      }
      if (course.courseScore >= 60) {
        return (Gpa = course.courseUnits * 4);
      }
      if (course.courseScore >= 50) {
        return (Gpa = course.courseUnits * 3);
      }
      if (course.courseScore >= 45) {
        return (Gpa = course.courseUnits * 2);
      }
      if (course.courseScore >= 40) {
        return (Gpa = course.courseUnits * 1);
      }
      if (course.courseScore <= 39) {
        return (Gpa = course.courseUnits * 0);
      }
      return Gpa;
    });

    const gradeScale7 = currentSemester.map((course) => {
      if (course.courseScore >= 70) {
        return (Gpa = course.courseUnits * 7);
      }
      if (course.courseScore >= 65) {
        return (Gpa = course.courseUnits * 6);
      }
      if (course.courseScore >= 60) {
        return (Gpa = course.courseUnits * 5);
      }
      if (course.courseScore >= 55) {
        return (Gpa = course.courseUnits * 4);
      }
      if (course.courseScore >= 50) {
        return (Gpa = course.courseUnits * 3);
      }
      if (course.courseScore >= 45) {
        return (Gpa = course.courseUnits * 2);
      }
      if (course.courseScore >= 40) {
        return (Gpa = course.courseUnits * 1);
      }
      if (course.courseScore <= 39) {
        return (Gpa = course.courseUnits * 0);
      }
      return Gpa;
    });

    const activeGradeScale =
      preferredScale === 4
        ? gradeScale4
        : preferredScale === 5
        ? gradeScale5
        : gradeScale7;

    const totalGrade = activeGradeScale.reduce((a, b) => a + b, 0);
    const totalUnits = currentSemester.map((course) =>
      parseInt(course.courseUnits)
    );
    const totalUnitsValue = totalUnits.reduce((a, b) => a + b, 0);
    const finalCGPA = (totalGrade / totalUnitsValue).toFixed(2);
    return finalCGPA;
  };

  for (let i = 0; i < allSemestersArray.length; i += 1) {
    const semestersCummulativeGpa = () => {
      const eachSemester = allSemestersArray[i];
      return semesterGpa(eachSemester);
    };
    semestersGPAArray.push(semestersCummulativeGpa());
  }

  const totalSemestersGpa = semestersGPAArray.reduce(
    (a, b) => parseFloat(a) + parseFloat(b),
    0
  );
  const CGPA = (totalSemestersGpa / semestersGPAArray.length).toFixed(2);

  const addNewSemesterIndex = () => {
    const newSemester = { semesterName: '' };
    setSemesterIndex([...semesterIndex, newSemester]);
  };

  const updateSemesterName = (index, e) => {
    const { name, value } = e.target;
    const semestersIndex = [...semesterIndex];
    semestersIndex[index][name] = value;
    setSemesterIndex(semestersIndex);
  };

  const deleteSemester = (index) => {
    const semesterIndexes = [...semesterIndex];
    semesterIndexes.splice(index, 1);
    setSemesterIndex(semesterIndexes);
    const newSplicedSemestersArray = [...allSemestersArray];
    newSplicedSemestersArray.splice(index, 1);
    setAllSemestersArray(newSplicedSemestersArray);
  };

  return (
    <CalculatorContext.Provider
      value={{
        activeSemesterIndex,
        allSemestersArray,
        semester,
        setSemester,
        showSemesterModal,
        addNewCourses,
        toggleSemesterModal,
        updateRows,
        addNewSemester,
        changeActiveSemester,
        deleteCourse,
        changeScale,
        semesterGpa,
        showGPAModal,
        toggleGPAModal,
        addNewSemesterIndex,
        semesterIndex,
        updateSemesterName,
        deleteSemester,
        CGPA,
        showCGPAModal,
        toggleCGPAModal,
        preferredScale,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

CalculatorProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
