// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCAzW0KhIa8MWMQY8HUWjRd_Z4gbVXei4",
  authDomain: "kiwkiw-upload-image.firebaseapp.com",
  projectId: "kiwkiw-upload-image",
  storageBucket: "kiwkiw-upload-image.appspot.com",
  messagingSenderId: "251457787347",
  appId: "1:251457787347:web:346568b72efb0290dc0b26",
  measurementId: "G-XR0EBZCX5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage();