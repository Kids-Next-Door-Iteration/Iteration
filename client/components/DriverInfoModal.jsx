import React, {useState, useEffect} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import Modal from 'react-modal';

function NewDriverModal() {    
  const [driverLicense, setDriverLicense] = useState('');
  const [driverState, setDriverState] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [color, setColor] = useState(''); 
  const [licensePlateNumber, setLicensePlateNumber] = useState(0);
  const [activateDriver, setActivateDriver] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  //set post request to the backend that the user has activated driver to true
  //retrieve the current user's email from the session storage
  const currentUserEmail = sessionStorage.getItem('email');


  const openModal = () =>{
    setIsOpen(true);
    setActivateDriver(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
    
  //post request to api route for driver info database
  const handleDriverSubmit = () => {
    e.preventDefault();
    const payload = {
    };
  };
    
  //     const CreateNewThread = () =>{
  //         const data = { 
  //             event_name: eventName, 
  //             date: eventDate, 
  //             location: location, 
  //             thread: thread, 
  //             date_posted: todayFormatted, 
  //             email: currentUserEmail
  //         }

  //         axios.post('/db/thread', data)
  //         .then((res) => {
  //             console.log(res.data)
  //           setSubmitted(true);
  //         })
  //         .catch(e => {
  //           console.log(e);
  //         })
  //    }

  const refresh = () =>{
    window.location.href = '/dashboard';
  };
  return(
    <div id='new-event'>
      <button type="button" className="btn btn-danger btn-lg" role="button" aria-pressed="true" id="thread-modal-button" onClick={openModal}>Activate Driver</button>
      <Modal 
        className="Modal__Bootstrap modal-dialog"
        isOpen={modalIsOpen} 
        onRequestClose={closeModal}>
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Add Vehicle Info</h4>
            <button type="button" className="close" id='modal-close-button' onClick={closeModal}>
              <span aria-hidden="true">&times;</span>
              <span className="sr-only"></span>
            </button>
          </div>
          {!submitted &&
                        <div className='modal-form-open'> 
                          <div className="modal-body" id="new-thread-form">
                            <label>Driver License Name</label>
                            <input type='text' onChange={(e) => setDriverLicense(e.target.value)}></input>
                            <label>Driver License State</label>
                            <input type='text' onChange={(e) => setDriverState(e.target.value)}></input>
                            <label>Make</label>
                            <input type='text' onChange={(e) => setMake(e.target.value)}></input>
                            <label>Model</label>
                            <input type='text' onChange={(e) => setModel(e.target.value)}></input>
                            <label>Color</label>
                            <input type='text' onChange={(e) => setColor(e.target.value)}></input>
                            <label>License Plate #</label>
                            <input type='text' onChange={(e) => setLicensePlateNumber(e.target.value)}></input>
                          </div>
                        
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
                            <button type="button" className="btn btn-primary" onClick>Submit Info</button>
                          </div>
                        </div>
          }
          {submitted && 
                        <div className='submitted-form-msg'>
                          <p>Your post was created!</p>
                          <button className = 'btn btn-primary' onClick={refresh}>Close</button>
                          {/* <button className="thread-card btn btn-primary text-left" onClick={route}>See Post</button> */}
                        </div>}
        </div>
      </Modal>
    </div>

  );
}

export default NewDriverModal;