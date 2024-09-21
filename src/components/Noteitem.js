// import React, { useContext } from 'react'
// import noteContext from "../context/notes/noteContext"
// import '../css/normal.css'

// const Noteitem = (props) => {
//     const context = useContext(noteContext);
//     const { deleteNote } = context;
//     const { note, updateNote } = props;
//     return (
//         <div className='col-md-3'>
//             <div className="card my-3 position-relative">
//                 <span className="badge badge_01 badge-dark ">{note.tag}</span>
//                 <span className="badge badge_02 badge-dark "><i className="fa-regular fa-trash-can mx-1 circle_back" onClick={() => { deleteNote(note._id); props.showAlert("Deleted Successfully", "success") }}></i>
//                 <i className="fa-regular fa-pen-to-square mx-1 circle_back" onClick={() => { updateNote(note) }}></i></span>
//                 <div className="card-body">
//                     <div className='d-flex align-items-center justify-content-between'>
//                         <h5 className="card-title">{note.title}</h5>
//                         {/* <div className='d-flex align-items-center'>
//                             <i className="fa-regular fa-trash-can mx-2" onClick={() => { deleteNote(note._id); props.showAlert("Deleted Successfully", "success") }}></i>
//                             <i className="fa-regular fa-pen-to-square mx-2" onClick={() => { updateNote(note) }}></i>
//                         </div> */}
//                     </div>
//                     <p className="card-text">{note.description}</p>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default Noteitem







import React, { useContext, useState } from 'react';
import noteContext from "../context/notes/noteContext";
import '../css/normal.css';

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    // State to manage the visibility of the modal
    const [showModal, setShowModal] = useState(false);
    const [noteIdToDelete, setNoteIdToDelete] = useState(null);

    // Function to handle showing the modal and setting the note to delete
    const handleDeleteClick = (id) => {
        setNoteIdToDelete(id);
        setShowModal(true);
    };

    // Function to confirm deletion
    const confirmDelete = () => {
        deleteNote(noteIdToDelete);
        setShowModal(false);
        props.showAlert("Deleted Successfully", "success");
    };

    return (
        <div className='col-md-3'>
            <div className="card my-3 position-relative">
                <span className="badge badge_01 badge-dark">{note.tag}</span>
                <span className="badge badge_02 badge-dark">
                    <i className="fa-regular fa-trash-can mx-1 circle_back" onClick={() => handleDeleteClick(note._id)}></i>
                    <i className="fa-regular fa-pen-to-square mx-1 circle_back" onClick={() => { updateNote(note) }}></i>
                </span>
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Delete Note</h5>
                                {/* <button type="button" className="close" onClick={() => setShowModal(false)} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button> */}
                                <button
                                        type="button"
                                        className="close"
                                        onClick={() => setShowModal(false)}
                                        aria-label="Close"
                                        style={{
                                            marginLeft: 'auto', // Ensures the button is floated to the right
                                            fontSize: '1.5rem',
                                        }}
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                            </div>
                            <div className="modal-body">
                                Are you sure you want to delete this note?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                                
                                <button type="button" className="btn btn-danger" onClick={confirmDelete}>Yes, Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
           
{/* 
{showModal && (
                <div
                    className={`modal-backdrop fade ${showModal ? 'show' : ''}`}
                    style={{ display: showModal ? 'block' : 'none', backgroundColor: 'rgba(0,0,0,1)' }}
                >
                    <div
                        className={`modal fade ${showModal ? 'show' : ''}`}
                        tabIndex="-1"
                        role="dialog"
                        style={{
                            display: showModal ? 'block' : 'none',
                            // opacity: showModal ? 1 : 0,
                            transition: 'opacity 0.5s ease',
                        }}
                    >
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Delete Note</h5>
                                    <button
                                        type="button"
                                        className="close"
                                        onClick={() => setShowModal(false)}
                                        aria-label="Close"
                                        style={{
                                            marginLeft: 'auto', // Ensures the button is floated to the right
                                            fontSize: '1.5rem',
                                        }}
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    Are you sure you want to delete this note?
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                                        Cancel
                                    </button>
                                    <button type="button" className="btn btn-danger" onClick={confirmDelete}>
                                        Yes, Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )} */}
        </div>
    );
};

export default Noteitem;
