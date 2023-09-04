import React from 'react'
// import PaymentForm from './components/PaymentForm';
import { useState } from 'react';
import Form from './Form';
import { useNavigate } from 'react-router-dom';




function Premium() {
    const navigate = useNavigate();
  const [displayForm,setDisplayForm] = useState(false);
  const [formData,setFormData] =useState({
  id:null,
  title:null,
  price:null
  });

  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  return (
    <>
    <Form title={formData.title} price={formData.price} id={formData.id} setDisplayForm={setDisplayForm}/>
    {/* <div
        class="fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="exampleModalLong"
        aria-labelledby="exampleModalLongLabel"
        //aria-hidden="true"
        >
        <div
          
          class="pointer-events-none  transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]" style={{ fontSize: '1.3rem' }}>
          <div
            class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#444, 0.15)] pointer-events-auto relative  flex-col rounded-md border-none bg-red  text-current shadow-lg outline-none dark:bg-neutral-">
           
      
            <Form title={formData.title} price={formData.price} id={formData.id} setDisplayForm={setDisplayForm}/>
           
          </div>
        </div>
        
      </div> */}
      </>
  )
}

export default Premium