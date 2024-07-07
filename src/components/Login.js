import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ui } from '../firebase';
import { EmailAuthProvider } from 'firebase/auth';
import 'firebaseui/dist/firebaseui.css';
import '../styling/Login.css'; // Ensure the path is correct
import logo from '../Pics/logo.png'; // Import the logo image

const Login = () => {
  const [authMode, setAuthMode] = useState(null); // 'login' or 'signup'
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    if (authMode) {
      const uiConfig = {
        signInSuccessUrl: '/', // URL to redirect to after a successful sign-in (not used in our case)
        signInOptions: [
          {
            provider: EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: authMode === 'signup', // Require display name only for signup
          }
        ],
        signInFlow: 'popup', // Use popup for sign-in flow (alternative is 'redirect')
        callbacks: {
          signInSuccessWithAuthResult: (authResult, redirectUrl) => {
            // User successfully signed in.
            // Navigate to the Dashboard component
            navigate('/');
            // Return false to prevent FirebaseUI from redirecting to the signInSuccessUrl.
            // return false;
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
        credentialHelper: 'none', // Disable account chooser to streamline the UI
        tosUrl: 'path/to/terms-of-service', // Optional, specify your terms of service URL
        privacyPolicyUrl: 'path/to/privacy-policy' // Optional, specify your privacy policy URL
      };

      // Initialize the FirebaseUI Widget using Firebase
      ui.start('#firebaseui-auth-container', uiConfig);

      return () => {
        ui.reset();
      };
    }
  }, [authMode, navigate]);

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="CART Logo" className="logo-img" /> {/* Logo image */}
        <div className="button-container">
          <button onClick={() => setAuthMode('login')}>Login</button>
          <button onClick={() => setAuthMode('signup')}>Signup</button>
        </div>
        {authMode && <div id="firebaseui-auth-container"></div>}
      </div>
    </div>
  );
};

export default Login;
