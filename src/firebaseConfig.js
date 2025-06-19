import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAMzVoxzc7mkP8AMJVXqzCGVkzm_3d7lKg",
  authDomain: "gce-study-companion.firebaseapp.com",
  projectId: "gce-study-companion",
  storageBucket: "gce-study-companion.firebasestorage.app",
  messagingSenderId: "845951616251",
  appId: "1:845951616251:web:5826deba18c810a2c55c5e",
  measurementId: "G-Y9TZZ4B8YX"
};


const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
export {createUserWithEmailAndPassword, signInWithEmailAndPassword};

const analytics = getAnalytics(app);