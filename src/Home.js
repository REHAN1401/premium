import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import { useState } from 'react';
import List from './components/Todo';
import Form from './components/Form';
import PaymentForm from './components/PaymentForm';
import { Routes, Route,useNavigate} from "react-router-dom"


// Initialization for ES Users

function Home() {  
  const navigate = useNavigate();
  const [displayForm,setDisplayForm] = useState(false);
  const [formData,setFormData] =useState({
  id:null,
  title:null,
  price:null
  });

const submit=(id,title,price)=>{
  setFormData({
    id:id,
    title:title,
    price:price
  })
    navigate("/form",{
      state:{
        id,
    title,
    price
      }
    })

}

  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  // const taskhandler = (e) => {
  //   setTaskName(e.target.value)
  // }

  // const desHandler = e => {
  //   setDescription(e.target.value)
  // }

  // const deleteTaskHandler = (id) => {
  //   const filteredItem = tasks.filter((task) => task.id !== id)
  //   setTasks(filteredItem);
  // }

  // const submitHandler = () => {
  //   const timeDate = new Date();
  //   let task = {
  //     id: Date.now(),
  //     name: taskName,
  //     timeDate: timeDate.getTime(),
  //     description: description
  //   }
  //   //setTasks([...tasks, task]);

  // };
 


  return (
    <>
      {/* <div className='bg-blue-950 h-screen font-bold overflow-scroll'>
        <h1 className='text-4xl text-center p-4'>TO Do</h1>
        <div className='flex justify-center'>
          <div>
            <div>
              <span>Task Name:</span>
              <input type="text" onChange={taskhandler}></input>
            </div>
            <div className="mt-4">
              <span>Description:</span>
              <textarea rows={2} onChange={desHandler}></textarea>
            </div>
          </div>
          <div className='m-2 bg-gray-600 w-14 flex justify-center rounded-sm'>
            <button onClick={submitHandler}>Add</button>
          </div>
        </div>
      </div>
      <div className='mt-10 flex justify-center'></div>
      <div className='mt-10 flex justify-center flex-wrap space-x-4'>
        <div className='mt-10 flex justify-center flex-wrap'>
          {tasks.length > 0 && tasks.map((data,index) => 
            <Todo info={data} key={index} deleteTaskHandler={deleteTaskHandler}/>
          // console.log("data from map",data)
          )}
        </div>
      </div> */}
       <div style={{ fontSize: '180.5%' }}>
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="flex flex-col mb-6 lg:flex-row md:mb-10">
          
          <div class="lg:w-1/2"  >
          <h2 style={{ fontSize: '3.3rem', fontWeight: 'bold' }}>Premium based Subscriptions.</h2>
          </div>
          <div class="lg:w-1/2">
            <div class="bg-gray-100 p-4 rounded-lg shadow-md">
            <p style={{ fontSize: '2.0rem' }}>
                Agroweather provides paid based Subscriptions for its users to enhance their experience and provide premium features, enabling the best experience and growth.
            </p>
            </div>

          </div>
        </div>
        <div class="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">


       

          <div class="bg-blue-100 p-6 rounded-lg shadow-lg border-2 border-blue-300">
            <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg class="w-7 h-7 text-deep-purple-accent-400" stroke-linecap="round" stroke-width="1" viewBox="0 -1 20 22">
                <path d="M5.114,5.726c0.169,0.168,0.442,0.168,0.611,0c0.168-0.169,0.168-0.442,0-0.61L3.893,3.282c-0.168-0.168-0.442-0.168-0.61,0c-0.169,0.169-0.169,0.442,0,0.611L5.114,5.726z M3.955,10c0-0.239-0.193-0.432-0.432-0.432H0.932C0.693,9.568,0.5,9.761,0.5,10s0.193,0.432,0.432,0.432h2.591C3.761,10.432,3.955,10.239,3.955,10 M10,3.955c0.238,0,0.432-0.193,0.432-0.432v-2.59C10.432,0.693,10.238,0.5,10,0.5S9.568,0.693,9.568,0.932v2.59C9.568,3.762,9.762,3.955,10,3.955 M14.886,5.726l1.832-1.833c0.169-0.168,0.169-0.442,0-0.611c-0.169-0.168-0.442-0.168-0.61,0l-1.833,1.833c-0.169,0.168-0.169,0.441,0,0.61C14.443,5.894,14.717,5.894,14.886,5.726 M5.114,14.274l-1.832,1.833c-0.169,0.168-0.169,0.441,0,0.61c0.168,0.169,0.442,0.169,0.61,0l1.833-1.832c0.168-0.169,0.168-0.442,0-0.611C5.557,14.106,5.283,14.106,5.114,14.274 M19.068,9.568h-2.591c-0.238,0-0.433,0.193-0.433,0.432s0.194,0.432,0.433,0.432h2.591c0.238,0,0.432-0.193,0.432-0.432S19.307,9.568,19.068,9.568 M14.886,14.274c-0.169-0.168-0.442-0.168-0.611,0c-0.169,0.169-0.169,0.442,0,0.611l1.833,1.832c0.168,0.169,0.441,0.169,0.61,0s0.169-0.442,0-0.61L14.886,14.274z M10,4.818c-2.861,0-5.182,2.32-5.182,5.182c0,2.862,2.321,5.182,5.182,5.182s5.182-2.319,5.182-5.182C15.182,7.139,12.861,4.818,10,4.818M10,14.318c-2.385,0-4.318-1.934-4.318-4.318c0-2.385,1.933-4.318,4.318-4.318c2.386,0,4.318,1.933,4.318,4.318C14.318,12.385,12.386,14.318,10,14.318 M10,16.045c-0.238,0-0.432,0.193-0.432,0.433v2.591c0,0.238,0.194,0.432,0.432,0.432s0.432-0.193,0.432-0.432v-2.591C10.432,16.238,10.238,16.045,10,16.045" fill="none" stroke="currentColor"></path>

              </svg>
            </div>
            <h6 class=" font-semibold leading-5">Weather Premium</h6>&nbsp;
            
            <p style={{ fontSize: '1.9rem' }}>
              At just <b>₹149 INR/month</b> enjoy the premium services.
            </p><br></br>
            <ul class="mb-4 -ml-1 space-y-2">
              <li class="flex items-start">
                <span class="mr-1">
                  <svg class="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </span>
                Unlimited access on agroweather.com
              </li>
              <li class="flex items-start">
                <span class="mr-1">
                  <svg class="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </span>
                Access to Future Weather-updates directly on website
              </li>
              <li class="flex items-start">
                <span class="mr-1">
                  <svg class="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </span>
                Detailed weather information for crop cultivation
              </li>
            </ul>

            <center>
              <button
                type="button" style={{ fontSize: '2.0rem' }}
                class="inline-block rounded bg-orange-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#f97316] transition duration-150 ease-in-out hover:bg-orange-600 hover:shadow-[0_8px_9px_-4px_rgba(249,115,22,0.3),0_4px_18px_0_rgba(249,115,22,0.2)] hover:scale-105 focus:bg-orange-600 focus:shadow-[0_8px_9px_-4px_rgba(249,115,22,0.3),0_4px_18px_0_rgba(249,115,22,0.2)] focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-[0_8px_9px_-4px_rgba(249,115,22,0.3),0_4px_18px_0_rgba(249,115,22,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(249,115,22,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(249,115,22,0.2),0_4px_18px_0_rgba(249,115,22,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(249,115,22,0.2),0_4px_18px_0_rgba(249,115,22,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(249,115,22,0.2),0_4px_18px_0_rgba(249,115,22,0.1)]"
                onClick={()=>submit(1,"You Choose Weather Premium Subscription","Pay Rs 149 Now")}
              >
                Subscribe
              </button>
            </center> 
          </div>



          <div class="bg-green-100 p-6 rounded-lg shadow-lg border-2 border-green-300">
            <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg class="w-7 h-7 text-deep-purple-accent-400" viewBox="5 2 37 40 " stroke-linecap="round">
                <path d="M30 8C30 6.89543 27.0125 6 24 6C20.9875 6 18 6.89543 18 8L17.1476 10.8414C17.5012 10.8954 17.8895 10.9524 18.301 11.0095C20.0968 11.2582 22.2905 11.5 24 11.5C25.7095 11.5 27.9032 11.2582 29.699 11.0095C30.1105 10.9524 30.4988 10.8954 30.8524 10.8414L30 8Z" fill="#333333" /> <path d="M31.5866 12.7514C31.1185 12.8252 30.5701 12.9079 29.9734 12.9905C28.16 13.2418 25.8537 13.5 24 13.5C22.1463 13.5 19.84 13.2418 18.0266 12.9905C17.4299 12.9079 16.8815 12.8252 16.4134 12.7514C13.1348 13.4776 11 14.6621 11 16C11 18.2091 16.8203 20 24 20C31.1797 20 37 18.2091 37 16C37 14.6621 34.8652 13.4776 31.5866 12.7514Z" fill="#333333" /> <path d="M16.0015 19.1535C16.0833 23.5009 19.633 27 24 27C28.367 27 31.9168 23.5009 31.9986 19.1535C31.3681 19.3051 30.6909 19.4392 29.9748 19.5535C29.6955 22.6077 27.1271 25 24 25C20.8729 25 18.3045 22.6077 18.0252 19.5535C17.3091 19.4392 16.632 19.3051 16.0015 19.1535Z" fill="#333333" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1974 35C16.4875 36.2271 15.3556 37.1795 14.0001 37.6586V41C14.0001 41.3506 13.9399 41.6872 13.8293 42H42.0001V36C42.0001 30.5833 30.0076 29 24.0001 29C22.3329 29 20.2048 29.1219 18.0001 29.4139L18 35H17.1974ZM24.0001 36C22.4153 36 21.0355 35.795 20 35.5706V31.2C21.467 31.0616 22.8475 31 24.0001 31C25.6661 31 27.8087 31.1287 30 31.4321V35C29.9869 35.0052 27.4909 36 24.0001 36ZM34.7026 32.3916C34.1515 32.2338 33.5811 32.0914 33 31.9633V35H35.0001C35.5523 35 36.0001 35.4477 36.0001 36V40H40.0001V36C40.0001 35.4942 39.7524 34.9085 38.8353 34.2233C37.8956 33.5212 36.4723 32.898 34.7026 32.3916Z" fill="#333333" /> <path d="M8 25C8 24.4477 7.55228 24 7 24C6.44772 24 6 24.4477 6 25V32C6 34.2091 7.79086 36 10 36V41C10 41.5523 10.4477 42 11 42C11.5523 42 12 41.5523 12 41V36C14.2091 36 16 34.2091 16 32V25C16 24.4477 15.5523 24 15 24C14.4477 24 14 24.4477 14 25V32C14 33.1046 13.1046 34 12 34V25C12 24.4477 11.5523 24 11 24C10.4477 24 10 24.4477 10 25V34C8.89543 34 8 33.1046 8 32V25Z" fill="none" stroke="currentColor"></path>
              </svg>
            </div>
            <h6 class="mb-2 font-semibold leading-5">Crop Premium</h6>&nbsp;
            <p style={{ fontSize: '1.9rem' }}>
              At just <b>₹199 INR/month</b> enjoy the premium services.
            </p><br></br>
            <ul class="mb-4 -ml-1 space-y-2">
              <li class="flex items-start">
                <span class="mr-1">
                  <svg class="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </span>
                Unlimited access on agroweather.com
              </li>
              <li class="flex items-start">
                <span class="mr-1">
                  <svg class="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </span>
                Crop cultivation Tips every month directly on website
              </li>
              <li class="flex items-start">
                <span class="mr-1">
                  <svg class="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </span>
                Crop cultivation Guidance according to regions
              </li>
            </ul>        
            <center>
              <button
                type="button" style={{ fontSize: '2.0rem' }}
                class="inline-block rounded bg-orange-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#f97316] transition duration-150 ease-in-out hover:bg-orange-600 hover:shadow-[0_8px_9px_-4px_rgba(249,115,22,0.3),0_4px_18px_0_rgba(249,115,22,0.2)] hover:scale-105 focus:bg-orange-600 focus:shadow-[0_8px_9px_-4px_rgba(249,115,22,0.3),0_4px_18px_0_rgba(249,115,22,0.2)] focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-[0_8px_9px_-4px_rgba(249,115,22,0.3),0_4px_18px_0_rgba(249,115,22,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(249,115,22,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(249,115,22,0.2),0_4px_18px_0_rgba(249,115,22,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(249,115,22,0.2),0_4px_18px_0_rgba(249,115,22,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(249,115,22,0.2),0_4px_18px_0_rgba(249,115,22,0.1)]"
                onClick={()=>submit(2,"You Choose Crop Premium Subscription","Pay Rs 199 Now")}
              >
                Subscribe
              </button>
            </center>

          </div>




          <div class="bg-pink-100 p-6 rounded-lg shadow-lg border-2 border-pink-300">
            <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg class="w-7 h-7 text-deep-purple-accent-400" viewBox="0 4 25 15" stroke-linecap="round">
                <path d="M 11 17 h -0.1 a 4.952 4.952 0 0 0 -0.729 -1.756 l 0.073 -0.073 a 1 1 0 0 0 -1.414 -1.414 l -0.073 0.073 A 4.952 4.952 0 0 0 7 13.1 V 13 a 1 1 0 0 0 -2 0 v 0.1 a 4.952 4.952 0 0 0 -1.756 0.729 l -0.073 -0.073 a 1 1 0 0 0 -1.414 1.414 l 0.073 0.073 A 4.952 4.952 0 0 0 1.1 17 H 1 a 1 1 0 0 0 0 2 h 0.1 a 4.952 4.952 0 0 0 0.729 1.756 l -0.073 0.073 a 1 1 0 0 0 1.414 1.414 l 0.073 -0.073 A 4.952 4.952 0 0 0 5 22.9 V 23 a 1 1 0 0 0 2 0 v -0.1 a 4.952 4.952 0 0 0 1.756 -0.729 l 0.073 0.073 a 1 1 0 0 0 1.414 -1.414 l -0.073 -0.073 A 4.952 4.952 0 0 0 10.9 19 H 11 A 1 1 0 0 0 11 17 Z M 6 21 a 3 3 0 0 1 0 -6 A 3 3 0 0 1 6 21 Z m 18 -9 a 4 4 0 0 0 -4 -4 V 6 a 1 1 0 0 0 -2 0 V 8 H 15.554 L 12.023 2.35 A 4.971 4.971 0 0 0 7.783 0 H 6 A 3 3 0 0 0 3 3 V 8 a 3 3 0 0 0 -3 3 a 1 1 0 0 0 2 0 a 1 1 0 0 1 1 -1 H 20 a 2.012 2.012 0 0 1 1.6 3.2 l -1.555 2.073 c -6.729 -2 -8.559 8.3 -1.545 8.727 a 4.522 4.522 0 0 0 3.226 -7.634 L 23.2 14.4 A 4.022 4.022 0 0 0 24 12 Z M 5 3 A 1 1 0 0 1 6 2 H 7.783 a 2.983 2.983 0 0 1 2.544 1.41 L 13.2 8 H 5 Z M 18.5 22 a 2.5 2.5 0 0 1 0 -5 A 2.5 2.5 0 0 1 18.5 22 Z" fill="none" stroke="currentColor"></path>
              </svg>
            </div>
            <h6 class="mb-2 font-semibold leading-5">Tech Premium</h6>&nbsp;
            <p style={{ fontSize: '1.9rem' }}>
              At just <b>₹299 INR/month</b> enjoy the premium services.
            </p><br></br>
            <ul class="mb-4 -ml-1 space-y-2">
              <li class="flex items-start">
                <span class="mr-1">
                  <svg class="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </span>
                Unlimited access on agroweather.com
              </li>
              <li class="flex items-start">
                <span class="mr-1">
                  <svg class="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </span>
                Get all Agricultural based tips before anyone else.
              </li>
              <li class="flex items-start">
                <span class="mr-1">
                  <svg class="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </span>
                Personalise interaction with team via phone
              </li>
            </ul>
            <center>
              <button
                type="button" style={{ fontSize: '2.0rem' }}
                class="inline-block rounded bg-orange-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#f97316] transition duration-150 ease-in-out hover:bg-orange-600 hover:shadow-[0_8px_9px_-4px_rgba(249,115,22,0.3),0_4px_18px_0_rgba(249,115,22,0.2)] hover:scale-105 focus:bg-orange-600 focus:shadow-[0_8px_9px_-4px_rgba(249,115,22,0.3),0_4px_18px_0_rgba(249,115,22,0.2)] focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-[0_8px_9px_-4px_rgba(249,115,22,0.3),0_4px_18px_0_rgba(249,115,22,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(249,115,22,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(249,115,22,0.2),0_4px_18px_0_rgba(249,115,22,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(249,115,22,0.2),0_4px_18px_0_rgba(249,115,22,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(249,115,22,0.2),0_4px_18px_0_rgba(249,115,22,0.1)]"
                onClick={()=>submit(3,"You Choose Tech Premium Subscription","Pay Rs 299 Now")}>
                Subscribe
              </button>
            </center>

          </div>


      

          <div class="bg-yellow-100 p-6 rounded-lg shadow-lg border-2 border-yellow-300">
            <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg class="w-10 h-12 text-deep-purple-accent-400" stroke-linecap="round" stroke-width="17" viewBox="-1 -25 650 600">
                <path d="M0 24C0 10.75 10.75 0 24 0H616C629.3 0 640 10.75 640 24C640 37.25 629.3 48 616 48H24C10.75 48 0 37.25 0 24zM0 488C0 474.7 10.75 464 24 464H616C629.3 464 640 474.7 640 488C640 501.3 629.3 512 616 512H24C10.75 512 0 501.3 0 488zM211.2 160C211.2 195.3 182.5 224 147.2 224C111.9 224 83.2 195.3 83.2 160C83.2 124.7 111.9 96 147.2 96C182.5 96 211.2 124.7 211.2 160zM32 320C32 284.7 60.65 256 96 256H192C204.2 256 215.7 259.4 225.4 265.4C188.2 280.5 159.8 312.6 149.6 352H64C46.33 352 32 337.7 32 320V320zM415.9 264.6C425.3 259.1 436.3 256 448 256H544C579.3 256 608 284.7 608 320C608 337.7 593.7 352 576 352H493.6C483.2 311.9 453.1 279.4 415.9 264.6zM391.2 290.4C423.3 297.8 449.3 321.3 460.1 352C463.7 362 465.6 372.8 465.6 384C465.6 401.7 451.3 416 433.6 416H209.6C191.9 416 177.6 401.7 177.6 384C177.6 372.8 179.5 362 183.1 352C193.6 322.3 218.3 299.2 249.1 291.1C256.1 289.1 265.1 288 273.6 288H369.6C377 288 384.3 288.8 391.2 290.4zM563.2 160C563.2 195.3 534.5 224 499.2 224C463.9 224 435.2 195.3 435.2 160C435.2 124.7 463.9 96 499.2 96C534.5 96 563.2 124.7 563.2 160zM241.6 176C241.6 131.8 277.4 96 321.6 96C365.8 96 401.6 131.8 401.6 176C401.6 220.2 365.8 256 321.6 256C277.4 256 241.6 220.2 241.6 176z" fill="none" stroke="currentColor"></path>
              </svg>
            </div>
            <h6 class="mb-2 font-semibold leading-5">Agro Gold</h6>&nbsp;
            <p style={{ fontSize: '1.9rem' }}>
              At just <b>₹499 INR/month</b> enjoy the premium services.
            </p><br></br>
            <ul class="mb-4 -ml-1 space-y-2">
              <li class="flex items-start">
                <span class="mr-1">
                  <svg class="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </span>
                Unlimited access on agroweather.com
              </li>
              <li class="flex items-start">
                <span class="mr-1">
                  <svg class="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </span>
                Connect directly with our professional Consultants.
              </li>
              <li class="flex items-start">
                <span class="mr-1">
                  <svg class="w-5 h-5 mt-px text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </span>
                Includes all other Subscription facilities.
              </li>
            </ul>
            
            <center>
              <button
                type="button" style={{ fontSize: '2.0rem' }}
                class="inline-block rounded bg-orange-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#f97316] transition duration-150 ease-in-out hover:bg-orange-600 hover:shadow-[0_8px_9px_-4px_rgba(249,115,22,0.3),0_4px_18px_0_rgba(249,115,22,0.2)] hover:scale-105 focus:bg-orange-600 focus:shadow-[0_8px_9px_-4px_rgba(249,115,22,0.3),0_4px_18px_0_rgba(249,115,22,0.2)] focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-[0_8px_9px_-4px_rgba(249,115,22,0.3),0_4px_18px_0_rgba(249,115,22,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(249,115,22,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(249,115,22,0.2),0_4px_18px_0_rgba(249,115,22,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(249,115,22,0.2),0_4px_18px_0_rgba(249,115,22,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(249,115,22,0.2),0_4px_18px_0_rgba(249,115,22,0.1)]"
                onClick={()=>submit(4,"You Choose Agro Gold Subscription","Pay Rs 449 Now")}>
                Subscribe
              </button>
            </center>

          </div>


        </div>
      </div>
      

</div>



{displayForm &&<div
  class="fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none"
  id="exampleModalLong"
  aria-labelledby="exampleModalLongLabel"
  //aria-hidden="true"
  >
  <div
    
    class="pointer-events-none  transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]" style={{ fontSize: '1.3rem' }}>
    <div
      class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#444, 0.15)] pointer-events-auto relative  flex-col rounded-md border-none bg-red  text-current shadow-lg outline-none dark:bg-neutral-">
      {/* <div
        class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
       
        <h5
          class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
          id="exampleModalLongLabel">
          Modal title
        </h5>
        <button
          type="button"
          class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          
          aria-label="Close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div> */}

      <Form title={formData.title} price={formData.price} id={formData.id} setDisplayForm={setDisplayForm}/>
     
      {/* <div
        class="-4 flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
        <button
          type="button"
          class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
          
          data-te-ripple-color="light">
          Close
        </button>
        <button
          type="button"
          class="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          
          data-te-ripple-color="light">
          Save changes
        </button>
      </div> */}
    </div>
  </div>
  
</div>}

    </>
  );
};

export default Home;

