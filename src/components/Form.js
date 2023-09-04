import React, { useState } from 'react';
import './Form.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from '../firebaseConfig';
import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route, useNavigate,useLocation } from "react-router-dom"

firebase.initializeApp(firebaseConfig);


function Form() {

  const navigate = useNavigate();
  const location=  useLocation();
  console.log(location.state);
  const { isAuthenticated, user } = useAuth0();
  console.log("logged in user", user);
  const [formData, setFormData] = useState({
    id: location.state?location.state.id:null,
    firstName: '',
    lastName: '',
    email: user?.email,
    age: '',
    region: '',
    state: '',
    agricultureType: '',
    cropType: '',
    loggedInUser: user ? user.email : "",
  });



  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  }

  function validateField(fieldName, value) {
    let errorMessage = '';

    switch (fieldName) {
      case 'firstName':
        errorMessage = value.trim() === '' ? 'First name is required' : '';
        break;
      case 'lastName':
        errorMessage = value.trim() === '' ? 'Last name is required' : '';
        break;
      case 'email':
        errorMessage = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ''
          : 'Invalid email address';
        break;
      case 'age':
        errorMessage = value < 18 ? 'Age must be at least 18' : '';
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: errorMessage }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
  

    if (!isAuthenticated) {
      alert("Please login to submit form!!")
    }

    const hasErrors = Object.values(errors).some((error) => error !== '');
    if (!hasErrors && isAuthenticated) {
      navigate("/payment",{
        state:formData
      })
    } else {
      alert('Form has errors :( Please fix it to continue!');
    }
  }

  return (

    <div className="form-container">

      <center>

        <h1 className="form-heading">
          {location.state.title ? location.state.title : 'You Choose Weather Premium Subscription'}
        </h1>
      </center>

      <div className="form-group mt-8">
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
        {errors.firstName && <div className="error-message">{errors.firstName}</div>}
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
        {errors.lastName && <div className="error-message">{errors.lastName}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label" >
          Email:
        </label>
        <input
          className="form-input"
          type="email"
          id="email"
          name="email"
          value={user?.email}
          //onChange={handleInputChange}
          disabled
        />
        {errors.email && <div className="error-message">{errors.email}</div>}
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
        {errors.age && <div className="error-message">{errors.age}</div>}
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
          District:
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
        </select>
      </div>
      <div class="button-container">
      <button type="submit" className="form-button" onClick={ handleSubmit}>
        {location.state.price ? location.state.price : 'Pay Rs149 NOW'}
      </button>
      <button type="submit" className="form-button2" onClick={() => navigate("/home")}>Cancel</button>
      </div>
    </div>
  );
}

export default Form;
