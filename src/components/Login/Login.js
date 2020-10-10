import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

const Login = () => {

    const [user, setUser] = useState({
        isSignIn: false,
        name: "",
        email: "",
        image: "",
    });

    if (firebase.apps.length === 0) {
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () => {
        console.log('btn clicked');

        firebase.auth().signInWithPopup(provider)
            .then(res => {
                console.log(res);
                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                    isSignIn: true,
                    name: displayName,
                    image: photoURL,
                    email: email
                }
                setUser(signedInUser)
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }

    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    image: ''
                }
                setUser(signOutUser);
                console.log(res);
            })

            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }

    return (
        <div className="container">
            <h1>Login Page</h1>

            {
                user.isSignIn ? <button onClick={handleSignOut}>Sign Out</button> :
                    <button onClick={handleSignIn}>Sign In</button>
            }

            {
                user.isSignIn && <div>
                    <h1>Welcome, {user.name}</h1>
                    <p>Email: {user.email}</p>
                    <img src={user.image} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;