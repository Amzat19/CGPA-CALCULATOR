export const SelectSemester = ({semesterIndex}) => {
  console.log(semesterIndex);
    return (
      semesterIndex.map((data,index) => {
        const {semesterName} = data;
        return (
          <option key={index} value={index}>{semesterName ? semesterName : `Semester ${index + 1}`}</option>
        )
      })
    )
      
  }