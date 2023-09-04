import { Routes, Route } from "react-router-dom"
import React from 'react'
import Home from "./Home";
import PaymentForm from "./components/PaymentForm";
import Premium from "./components/Premium";
import Admn from "./Admn";
import SubDetailsOfUser from "./SubDetailsOfUser";
import Form from "./components/Form";
function App() {
  return (  
    <div>
        <Routes>
        <Route path="/" element={ <Admn /> } />
        <Route path="/admin-all-subscription" element={<SubDetailsOfUser/>} />
        <Route path="/home" element={ <Home/> } />
        <Route path="/form" element={ <Form/> } />
        <Route path="/payment" element={ <PaymentForm/> } />
    
      </Routes>
      </div>
  );
}

export default App;