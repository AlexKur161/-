import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXuhFUVXXgMJlfZbaJmfNGjVEBUdmmIzs",
  authDomain: "vite-shop-de1c6.firebaseapp.com",
  projectId: "vite-shop-de1c6",
  storageBucket: "vite-shop-de1c6.appspot.com",
  messagingSenderId: "708037892402",
  appId: "1:708037892402:web:d3e912572517dab3a9df2b",
  measurementId: "G-Q51DJDM529"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
export { db }