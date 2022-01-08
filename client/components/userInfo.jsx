import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import Geocode from "react-geocode";
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

function UserInfo(props) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [address, setAddress] = useState('');
    const [location, setLocation] = useState({});

    const getAddress = () =>{
        axios.get(`/api/${props.email}`)
        .then((res) => {
            setAddress(res.data['address'])
          })
          .catch(e => {
            console.log(e);
          })
    }

    const map = () => {
            Geocode.setApiKey("AIzaSyDR7USipEdGyGlmd0ttJVMgEvrgbkFKTKU");
    Geocode.fromAddress(address).then(
        (response) => {
          let location = response.results[0].geometry.location;
          console.log(location);
          setLocation(location)
        },
        (error) => {
          console.error(error);
        }
    );
    }

    const openModal = () =>{
        setIsOpen(true);
        getAddress();
        map();
    }

    const closeModal = () =>{
        setIsOpen(false);
    }

  return (
    <div id='userInfoModal' >
        <a className='user-info-button' onClick={openModal}><strong>{props.username}</strong></a>
        <Modal  className="Modal__Bootstrap modal-dialog" isOpen={modalIsOpen} onRequestClose={closeModal} >
            <div className="modal-content">
                <h4>{props.username}</h4>
                <h4>{props.email}</h4>
                <button className='btn btn-primary'>Send Private Message</button>
                <div className= 'map' style={{height: '500px', width: '100%'}}>
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDR7USipEdGyGlmd0ttJVMgEvrgbkFKTKU' }}
                    defaultCenter={location}
                    defaultZoom = {15}
                    >
                    </GoogleMapReact>
                </div>
            </div>
        </Modal>
    </div>
  );
}

export default UserInfo;