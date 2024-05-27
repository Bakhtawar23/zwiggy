// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJzysOMw5Se00o-vxs2MpB-SOLOZ3vnew",
  authDomain: "zwiggy-28207.firebaseapp.com",
  projectId: "zwiggy-28207",
  storageBucket: "zwiggy-28207.appspot.com",
  messagingSenderId: "627139781997",
  appId: "1:627139781997:web:669bc9a9ceaabaf0b5e664",
  measurementId: "G-24LDLT2DG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);