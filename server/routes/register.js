import express from 'express';
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
