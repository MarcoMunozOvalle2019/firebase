import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVitR6ZUWaDkwXtykuWnmBjoVcjh6DVj8",
  authDomain: "react-fb-auth-933f5.firebaseapp.com",
  projectId: "react-fb-auth-933f5",
  storageBucket: "react-fb-auth-933f5.firebasestorage.app",
  messagingSenderId: "857443204906",
  appId: "1:857443204906:web:17625a44d07fb468d2a853"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
