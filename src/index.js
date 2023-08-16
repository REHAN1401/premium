import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './Footer';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Navbar from './Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
      domain="dev-gz44v1zmjnu7qk0x.us.auth0.com"
      clientId="PWE7dff0sosl4WjqRHD5AWGWwb0X4rFo"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
        <Auth0Provider
    domain="dev-gz44v1zmjnu7qk0x.us.auth0.com"
    clientId="OGbCy3NA4zDlhBUICM91TQa8qhz6tEN8"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <BrowserRouter>
        <Navbar />
        <App />
        <Footer />
      </BrowserRouter>
    </Auth0Provider>
    </Auth0Provider> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
