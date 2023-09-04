import React, { useState } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from '../firebaseConfig';
import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom"

import { Link,useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const Card = styled.div`
  width: 500px;

  padding: 20px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const CardField = styled.div`
  margin-bottom: 15px;
`;

const CardLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 17px
`;

const CardInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 18px
`;

const ErrorText = styled.div`
  color: red;
  font-size: 18px;
`;

const ShowHideLabel = styled.label`
  margin-left: 10px;
  font-size: 15px
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: gray;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 2%;

  &:hover {
    background-color: darkgray; /* Change the color for the hover effect */
  }
`



const PaymentForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth0();
  console.log(location.state);
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');
  const [showCardNumber, setShowCardNumber] = useState(false);
  const [showCvv, setShowCvv] = useState(false);

  const [errors, setErrors] = useState({
    cardholderName: '',
    cardNumber: '',
    expiration: '',
    cvv: '',
  });



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      alert("login to submit form!!")
    }

    const hasErrors = Object.values(errors).some((error) => error !== '');
    if (!hasErrors) {
      console.log('Form is valid. Submitting data...');
      const db = firebase.firestore();
      const dataRef = db.collection('agroweather');
      await dataRef.add(location.state);
    } else {
      console.log('Form has errors. Please fix them.');
    }

    if (validateForm()) {
      alert('Payment Successful Enoy your Services :)', { cardholderName, cardNumber, expiration, cvv });
    } else {
      console.log('Payment Failed :(');
    }
  };


 

  const validateForm = () => {
    const newErrors = {};

    if (!cardholderName.trim()) {
      newErrors.cardholderName = 'Cardholder name is required';
    }

    if (!cardNumber.trim() || !/^\d{16}$/.test(cardNumber)) {
      newErrors.cardNumber = 'Invalid card number';
    }

    if (!expiration.trim() || !/^\d{2}\/\d{2}$/.test(expiration)) {
      newErrors.expiration = 'Invalid expiration date (MM/YY)';
    }

    if (!cvv.trim() || !/^\d{3,4}$/.test(cvv)) {
      newErrors.cvv = 'Invalid CVV';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <Container>
      <Card>
        <CardField>
          <CardLabel>Cardholder's Name</CardLabel>
          <CardInput
            type="text"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
          />
          {errors.cardholderName && <ErrorText>{errors.cardholderName}</ErrorText>}
        </CardField>

        <CardField>
          <CardLabel>Card Number</CardLabel>
          <CardInput
            type={showCardNumber ? 'text' : 'password'}
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          {errors.cardNumber && <ErrorText>{errors.cardNumber}</ErrorText>}
        </CardField>

        <CardField>
          <CardLabel>Expiration Date (MM/YY)</CardLabel>
          <CardInput
            type="text"
            value={expiration}
            onChange={(e) => setExpiration(e.target.value)}
          />
          {errors.expiration && <ErrorText>{errors.expiration}</ErrorText>}
        </CardField>

        <CardField >
          <CardLabel >CVV</CardLabel>
          <CardInput
            type={showCvv ? 'text' : 'password'}
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
          {errors.cvv && <ErrorText>{errors.cvv}</ErrorText>}
        </CardField>

        <CardField>
          <ShowHideLabel>
            <input
              type="checkbox"
              checked={showCardNumber}
              onChange={() => setShowCardNumber(!showCardNumber)}
            />
            Show Card Number
          </ShowHideLabel>
          <ShowHideLabel>
            <input
              type="checkbox"
              checked={showCvv}
              onChange={() => setShowCvv(!showCvv)}
            />
            Show CVV
          </ShowHideLabel>
        </CardField>

        <Button type="submit" onClick={handleSubmit}>Pay Now</Button>
        <Button type="button" onClick={()=>navigate('/')}>
      Cancel
    </Button>
      </Card>
    </Container>
  );
};

export default PaymentForm;
