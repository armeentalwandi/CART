// src/components/Login.js
import React, { useEffect } from 'react';
import { ui } from '../firebase';
import { EmailAuthProvider } from 'firebase/auth';
import 'firebaseui/dist/firebaseui.css';
import '../styling/Login.css'; // Ensure the path is correct
import logo from '../Pics/logo.png'; // Import the logo image

const Login = () => {
  useEffect(() => {
    const uiConfig = {
      signInSuccessUrl: '/', // URL to redirect to after a successful sign-in
      signInOptions: [
        {
          provider: EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: false
        }
      ],
      signInFlow: 'popup', // Use popup for sign-in flow (alternative is 'redirect')
      callbacks: {
        signInSuccessWithAuthResult: (authResult, redirectUrl) => {
          // User successfully signed in.
          // Return false to prevent FirebaseUI from redirecting to the signInSuccessUrl.
          return true;
        },
        signInFailure: (error) => {
          console.error('Sign-in error:', error);
          // Handle sign-in errors here.
        },
        uiShown: () => {
          // The widget is rendered.
          // Hide the loader if any.
        }
      },
    };

    // Initialize the FirebaseUI Widget using Firebase
    ui.start('#firebaseui-auth-container', uiConfig);

    return () => {
      ui.reset();
    };
  }, []);

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="CART Logo" className="logo-img" /> {/* Logo image */}
        <div id="firebaseui-auth-container"></div>
      </div>
    </div>
  );
};

export default Login;
