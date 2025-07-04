
// src/handlers/auth/updateUser.js
import { db } from '../firebase.js';
import { doc, updateDoc } from 'firebase/firestore';
import bcrypt from 'bcrypt';

export async function updateUser(req, res) {
    try {
        const {
            uid,
            username,
            email,
            phonenumber,
            password,
            classLevel,
            subjectsOffered,
        } = req.body;

        if (!uid) {
            return res.status(400).json({ status: 400, error: 'User ID (uid) is required' });
        }

        const userRef = doc(db, 'users', uid);
        const updateData = {};

        if (username) updateData.username = username;
        if (email) updateData.email = email;
        if (phonenumber) updateData.phonenumber = phonenumber;
        if (classLevel) updateData.classLevel = classLevel;
        if (subjectsOffered) updateData.subjectsOffered = subjectsOffered;

        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            updateData.password = hashedPassword;
        }

        await updateDoc(userRef, updateData);

        return res.status(200).json({
            status: 200,
            message: 'User updated successfully',
            updated: updateData,
        });

    } catch (error) {
        console.error('Error updating user:', error.message);
        return res.status(500).json({ status: 500, error: 'Server error' });
    }
}
