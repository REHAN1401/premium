// src/Form.js
import React, { Component, useState } from 'react';
import './Form.css'; // Import the associated styles
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from '../firebaseConfig';
firebase.initializeApp(firebaseConfig);


function Form ({title,price,id}){



  const[formData,setFormData] = useState({
    id:'',
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    region: '',
    state: '',
    agricultureType: '',
    cropType: '',
  })
  

  const fetchData = async () => {
    const db = firebase.firestore();
    const dataRef = db.collection('data');
    const snapshot = await dataRef.get();
    const fetchedData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
  };

  

    
console.log(formData)
  function handleInputChange(event){
    const { name, value } = event.target;
    setFormData({ ...formData,[name]: value });
  }

  const  handleSubmit = async(event)=>{
    console.log('submitting form')
    console.log(formData)

    console.log("inside submit")
    const db = firebase.firestore();
    const dataRef = db.collection('agroweather');
    await dataRef.add({ value: formData });
   
  }

    return (
      <div className="form-container">
        <center>
          <h1 className="form-heading">{title ?title :"You Choose Weather Premium Subscription"}</h1>
        </center>
          <div className="form-group">
            <label htmlFor="firstName" className="form-label">
              First Name:
            </label>
            <input
              className="form-input"
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="form-label">
              Last Name:
            </label>
            <input
              className="form-input"
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age" className="form-label">
              Age:
            </label>
            <input
              className="form-input"
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="region" className="form-label">
              Region:
            </label>
            <select
              className="form-select"
              id="region"
              name="region"
              value={formData.region}
              onChange={handleInputChange}
            >
              <option value="">Select Region</option>
              <option value="Vidarbha">Vidarbha</option>
              <option value="Marathwada">Marathwada</option>
              <option value="Konkan">Konkan</option>
              <option value="Western Maharashtra">Western Maharashtra</option>
              <option value="Northern Maharashtra">Northern Maharashtra</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="state" className="form-label">
              State:
            </label>
            <select
              className="form-select"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
            >
              <option value="">Select your District</option>
              <option value="Mumbai City">Mumbai City</option>
              <option value="Pune">Pune</option>
              <option value="Nagpur">Nagpur</option>
              <option value="Nashik">Nashik</option>
              <option value="Kolhapur">Kolhapur</option>
              <option value="Aurangabad">Aurangabad</option>
              <option value="Sangli">Sangli</option>
              <option value="Ahmednagar">Ahmednagar</option>
              <option value="Satara">Satara</option>
              {/* Add more districts as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="agricultureType" className="form-label">
              Agriculture Type:
            </label>
            <select
              className="form-select"
              id="agricultureType"
              name="agricultureType"
              value={formData.agricultureType}
              onChange={handleInputChange}
            >
              <option value="">Select Agriculture Type</option>
              <option value="organic">Organic</option>
              <option value="Dryland">Dryland</option>
              <option value="Cash Crop">Cash Crop</option>
              <option value="Diversified">Diversified</option>
              <option value="Mixed">Mixed</option>
              <option value="conventional">Conventional</option>
              {/* Add more agriculture types as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="cropType" className="form-label">
              Crop Type:
            </label>
            <select
              className="form-select"
              id="cropType"
              name="cropType"
              value={formData.cropType}
              onChange={handleInputChange}
            >
              <option value="">Select Crop Type</option>
              <option value="Kharif Crops">Kharif Crops</option>
              <option value="Rabi Crops">Rabi Crops</option>
              <option value="Cash Crops">Cash Crops</option>
              <option value="Horticultural Crops">Horticultural Crops</option>
              <option value="Oilseeds">Oilseeds</option>
              <option value="Industrial Crops">Industrial Crops</option>
              <option value="Pulses">Pulses</option>
              {/* Add more crop types as needed */}
            </select>
          </div> 
          <center>
            <button type="submit" className="form-button" onClick={handleSubmit}>
              {price?price :"Pay Rs149 NOW"}
            </button>
          </center>
      
      </div>
    );

}

export default Form;
