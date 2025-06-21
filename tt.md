I am working on a prject involving the use of nodejs , firbase database and postman to test the endpoints so help me inplement the password reset from this: import express from 'express'
const app= express()
const port = 3000

import registerRoute from './routes/register.js'
app.use(express.json())
app.use(registerRoute)

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
}) and import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyAMzVoxzc7mkP8AMJVXqzCGVkzm_3d7lKg",
  authDomain: "gce-study-companion.firebaseapp.com",
  projectId: "gce-study-companion",
  storageBucket: "gce-study-companion.appspot.com", 
  messagingSenderId: "845951616251",
  appId: "1:845951616251:web:5826deba18c810a2c55c5e",
  measurementId: "G-Y9TZZ4B8YX"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app); 
export { createUserWithEmailAndPassword, signInWithEmailAndPassword };
 also this import express from 'express';
import { db } from '../firebase.js';
import bcrypt from 'bcrypt'
import { collection, addDoc } from 'firebase/firestore';

const router = express.Router();

// Registration route
router.post('/api/auth/register', async (req, res) => {
  try {
    const { username, email, password, classLevel, subjects } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = {
      username : username,
      email : email,
      password: hashedPassword, 
      class: classLevel,
      subjects : subjects
    };

    const docRef = await addDoc(collection(db, 'users'), newUser);

    res.status(201).json({
      message: 'User created',
      data: newUser,
      docId: docRef.id
    });

    console.log(newUser);
  } catch (error) {
    console.error('Error registering user:', error.message);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

export default router;
mention all the necessities, and steps to test it on postman
