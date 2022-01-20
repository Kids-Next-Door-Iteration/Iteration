import React, {useState, useEffect} from "react";
import axios from 'axios'
import NewDriverModal from "./DriverInfoModal";


const Profile = () => {

  const [submitted, setSubmitted] = useState(false);
  const [getFirstName, setFirstName] = useState('');
  const [getLastName, setLastName] = useState('');
  const [getPhoneNumber, setPhoneNumber] = useState('');
  const [getEmailAddress, setEmailAddress] = useState('');
  const [getAddress, setAddress] = useState('');

  const [firstName, updateFirstName] = useState('');
  const [lastName, updateLastName] = useState('');
  const [phoneNumber, updatePhoneNumber] = useState('');
  const [emailAddress, updateEmailAddress] = useState('');
  const [address, updateAddress] = useState('');

  const currentUserInformation = sessionStorage.getItem('email');

  useEffect(() =>{
    axios.get(`/api/${currentUserInformation}`)
    .then((res) => {
        setFirstName(res.data['first_name'])
        setLastName(res.data['last_name'])
        setPhoneNumber(res.data['phone_number'])
        setEmailAddress(res.data['email'])
        setAddress(res.data['address'])
      })
      .catch(e => {
        console.error(e);
      })
  })

  //axios get request for driver information if they are a driver
  //axos request to update driver information


  // const handleSaveProfile = (e) => {
  //   e.preventDefault();

  //   if (firstName && lastName && phoneNumber && emailAddress && address) {
  //     const userPayload = {
  //       firstName,
  //       lastName,
  //       phoneNumber,
  //       emailAddress,
  //       address,
  //     }

  //   //   const res = await axios.update( )
  //   // }

  //   window.location.href = '/profile';
  // }

  return (

    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
        </div>
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              
            <span className='font-weight-bold'>
              {getFirstName} {getLastName}
              </span>
           <span className="text-black-50">
              {getEmailAddress}
            </span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6"><label className="labels">First Name</label><input type="text" className="form-control" placeholder={getFirstName} value={firstName} onChange={(e) => updateFirstName(e.target.value)}></input></div>
              <div className="col-md-6"><label className="labels">Last Name</label><input type="text" className="form-control" placeholder={getLastName} value={lastName} onChange={(e) => updateLastName(e.target.value)}></input></div>
            </div>
            <div className="row mt-3">
            <div className="col-md-12"><label className="labels">Address</label><input type="text" className="form-control" placeholder={getAddress} value={address} onChange={(e) => updateAddress(e.target.value)}></input></div>
              <div className="col-md-12"><label className="labels">Phone Number</label><input type="text" className="form-control" placeholder={getPhoneNumber} value={phoneNumber} onChange={(e) => updatePhoneNumber(e.target.value)}></input></div>
              <div className="col-md-12"><label className="labels">Email</label><input type="text" className="form-control" placeholder={getEmailAddress} value={emailAddress} onChange={(e) => updateEmailAddress(e.target.value)}></input></div>
            </div>
            <div className="row mt-2">
              <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="USA" value=""></input></div>
              <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control" placeholder="CO" value=""></input></div>
            </div>
            <div className="mt-5 text-center"><button class="btn btn-primary" type="button">Save Profile</button></div>
          </div>
        </div>
        <div className="col-md-4">
            <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3"><h4>Driver Information</h4></div>
            <div className="col-md-10"><label class="labels">Driver License Name</label><input type="text" class="form-control" placeholder="" value=""></input></div>
            <div className="col-md-10"><label class="labels">Driver License State</label><input type="text" class="form-control" placeholder="" value=""></input></div>
            <div className="col-md-10"><label class="labels">Make</label><input type="text" class="form-control" placeholder="" value=""></input></div>
            <div className="col-md-10"><label class="labels">Model</label><input type="text" class="form-control" placeholder="" value=""></input></div>
            <div className="col-md-10"><label class="labels">Color</label><input type="text" class="form-control" placeholder="" value=""></input></div>
            <div className="col-md-10"><label class="labels">Driver License #</label><input type="text" class="form-control" placeholder="" value=""></input></div>
          </div>
        </div>
      </div>

        <div className='driver-button'>
        <NewDriverModal/>
        </div>
    </div>
  );
};

export default Profile;