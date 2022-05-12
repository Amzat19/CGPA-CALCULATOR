
export const Modal = ({calculateGpa, toggleModal, active}) => {
    
    return (
        <div className={`modal ${active}`}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">View my CGPA</p>
            <button
              onClick={toggleModal}
              className="delete"
              aria-label="close"
            />
          </header>
          <section className="modal-card-body">
            <p>Your CGPA is</p>
            <p>{calculateGpa()}</p>
          </section>
          <footer className="modal-card-foot">
            <button onClick={toggleModal} className="button">
              Close
            </button>
          </footer>
        </div>
      </div>
    )
}