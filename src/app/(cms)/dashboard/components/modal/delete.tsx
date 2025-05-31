const DeleteModal = ({ show, onClose, onDelete } : any) => {
  return (
    <div className={`modal fade ${show ? 'show d-block' : ''}`} 
                tabIndex="-2"
                aria-labelledby="userInfoModalLabel"
                aria-modal={show ? "true" : undefined}
                role="dialog"
                style={show ? { backgroundColor: "rgba(0,0,0,0.5)" } : {}}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Confirm Deletion</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            <p>Are you sure you want to delete this item?</p>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button type="button" className="btn btn-danger" onClick={onDelete}>Delete</button>
          </div>

        </div>
      </div>
      {/* {show && <div className="modal-backdrop fade show"></div>} */}
    </div>
  );
};

export default DeleteModal;
