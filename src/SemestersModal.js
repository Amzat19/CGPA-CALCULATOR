import { SemesterIndexes } from "./SemesterIndexes";

export const SemestersModal = ({
    activeSemester, 
    toggleSemesterModal,
    updateSemesterName,
    addNewSemesterIndex,
    addNewSemester,
    semestersArray,
    deleteSemester,
    editSemester}) => {

    return (
        <div className={`modal ${activeSemester}`}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">View my CGPA</p>
            <button
            onClick={toggleSemesterModal}
              className="delete"
              aria-label="close"
            />
          </header>
          <section className="modal-card-body">
              <p>All Semesters</p>
              <SemesterIndexes updateSemesterName={updateSemesterName} 
              semestersArray={semestersArray}
              deleteSemester={deleteSemester}
              toggleSemesterModal={toggleSemesterModal}
              editSemester={editSemester}/>
          </section>
          <footer className="modal-card-foot">
              <button className="button is-primary" onClick={() => {addNewSemesterIndex(); addNewSemester()}}>Add Semester</button>
            <button className="button" onClick={toggleSemesterModal}>
              Close
            </button>
          </footer>
        </div>
      </div>
    )
};