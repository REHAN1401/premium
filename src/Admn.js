import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from './firebaseConfig';
import { useAuth0 } from '@auth0/auth0-react';
import { Routes, Route, useNavigate, Navigate, Link } from 'react-router-dom';
import styles from './Admn.module.css'; // Import the CSS module

firebase.initializeApp(firebaseConfig);

const Admn = () => {
  const { isAuthenticated, user } = useAuth0();
  const [data, setData] = React.useState([]);

  const fetchAllData = async () => {
    const db = firebase.firestore();
    const dataRef = db.collection('agroweather');
    const snapshot = await dataRef.get();
    const fetchedData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setData(fetchedData);
  };

  React.useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <div className={styles.bgGradient}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          User Data
        </h2>
        <p className={styles.description}>
          Explore the data of our valued agroweather users and premium customers.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {data.length > 0 ? (
          data.map((d) => (
            <div className={styles.card} key={d.id}>
              <div>
                <p className={styles.cardTitle}>
                  <span >Name:</span> {d.firstName} {d.lastName}
                </p>
                <p className={styles.cardInfo}>
                  <span >E-mail:</span> {d.email}
                </p>
                <p className={styles.cardInfo}>
                  <span >Region:</span> {d.region}
                </p>
                <p className={styles.cardInfo}>
                  <span >Total Subscriptions:</span> {d.subscriptions}
                </p>
              </div>
              <Link
                to="/admin-all-subscription"
                state={d}
                className={styles.link}
              >
                See More...
              </Link>
            </div>
          ))
        ) : (
          <center><p className={styles.description}>No users found</p></center>
        )}
      </div>
    </div>
  );
};

export default Admn;
