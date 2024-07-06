
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import * as firebaseui from 'firebaseui';



const firebaseConfig = {
  apiKey: "AIzaSyAUn595BJfgvXkt0xPYZbq3v9Q7GkZTIOU",
  authDomain: "cart-25495.firebaseapp.com",
  projectId: "cart-25495",
  storageBucket: "cart-25495.appspot.com",
  messagingSenderId: "922328697808",
  appId: "1:922328697808:web:37c744c5a9ff825f1a47d5",
  measurementId: "G-BTF85NJT5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)
const ui = new firebaseui.auth.AuthUI(auth);

export { auth, ui };