import React, {useState, useEffect} from "react";
import axios from 'axios'
import NewDriverModal from "./NewDriver";


const Profile = () => {

  const [submitted, setSubmitted] = useState(false);


  
  return (
    <div>
      <h1>User Profile</h1>
      <div
       style={{
        display: "flex",
        justifyContent: "right",
        alignItems: "right",
        height: "90vh"
      }}>
      <NewDriverModal/>
      </div>
    </div>
  );
};

export default Profile;