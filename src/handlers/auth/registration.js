import { db, auth } from '../firebase.js';
import bcrypt from 'bcrypt'
import { collection, where, addDoc, query, getDocs } from 'firebase/firestore';

export async function register(req, res) {
    try {
        const { username, email, password, phoneNumber } = req.body;
        if (!username || !email || !password || !phoneNumber) return res.status(400).json({error: 'All fields are required'})
        
        const usernameQuery = query(collection(db, 'users'), where ('username', '==', username))
        const emailQuery = query(collection(db, 'users'), where ('email', '==', email))

        const userSnapshot = await getDocs(usernameQuery)
        const emailSnapshot = await getDocs(emailQuery)

        if (!userSnapshot.empty) return res.status(401).json({error : 'Sorry, Username already exists.'})        
        if (!emailSnapshot.empty) return res.status(401).json({error : 'Sorry, Email already exists.'})
            
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = {
            username: username,
            email: email,
            phoneNumber: phoneNumber,
            password: hashedPassword
            
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
}
