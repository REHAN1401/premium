import React from 'react'
import { Link, Navigate, useLocation } from "react-router-dom";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from './firebaseConfig';
import { useAuth0 } from "@auth0/auth0-react";
import styles from './SubDetailsOfUser.module.css';
import { useNavigate } from 'react-router-dom';
firebase.initializeApp(firebaseConfig);

const SubDetailsOfUser = () => {
    const { isAuthenticated, user } = useAuth0();
    const [auth, setAuth] = React.useState(isAuthenticated)
    const [sub, setSub] = React.useState(isAuthenticated)
    const location = useLocation();
    const navigate = useNavigate();

    const propsData = location.state;
    console.log("propsData",propsData);
    
    const fetchData = async () => {
        const db = firebase.firestore();
        const dataRef = db.collection('agroweather').where('email', "==", propsData.email);
        const snapshot = await dataRef.get();
        const fetchedData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log("data", fetchedData)
        setSub(fetchedData);
    };


    React.useEffect(() => {
        if (isAuthenticated) {
            fetchData()
        }
    }, [isAuthenticated])

    return (
        <>
        <div className={styles.container}>
        {sub.length >0 ?

        sub.map((data)=>{
            return(
            <>
            {data.id === 1 ? 
            <div className={styles.box}>
                <center><h2>Weather Premium</h2></center>
                
               
                <p className={styles.paragraphSpacing}>• Unlimited access on agroweather.com</p>
                <p className={styles.paragraphSpacing}>• Access to Future Weather-updates directly on website</p>
                <p className={styles.paragraphSpacing}>• Detailed weather information for crop cultivation</p>
               
            </div>:
            data.id ===2?<div className={styles.box}>
            <h2>Crop Premium</h2>
           
           
            <p className={styles.paragraphSpacing}>• Unlimited access on agroweather.com</p>
            <p className={styles.paragraphSpacing}>• Crop cultivation Tips every month directly on website</p>
            <p className={styles.paragraphSpacing}>• Crop cultivation Guidance according to regions</p>

           
        </div>:data.id === 3?<div className={styles.box}>
                <h2>Tech Premium</h2>
                
               
                <p className={styles.paragraphSpacing}>• Unlimited access on agroweather.com</p>
                <p className={styles.paragraphSpacing}>• Get all Agricultural based tips before anyone else.</p>
                <p className={styles.paragraphSpacing}>• Personalise interaction with team via phone</p>
               
            </div>:<div className={styles.box}>
                <h2 >Agro Gold</h2>
                
               
                <p className={styles.paragraphSpacing}>• Unlimited access on agroweather.com</p>
                <p className={styles.paragraphSpacing}>• Connect directly with our professional Consultants.</p>
                <p className={styles.paragraphSpacing}>• Includes all other Subscription facilities.</p>
               
            </div>
            
            } 
           
            </>)
        }):<div className={styles.excp}> <br></br> <br></br> <br></br><p>You have not Subscribed yet  :(</p>
        <br></br>
        <br></br>
        <br></br>
       
        <br></br></div>}
        </div>
        <button type="submit" className={styles.BtnBlue1} onClick={()=>navigate(-1)}>Go Back</button>
        </>
    );

};

export default SubDetailsOfUser