import { db } from '../firebase.js';
import { doc, updateDoc } from 'firebase/firestore';
import bcrypt from 'bcrypt';

export async function updateUser(req, res) {
    try{
        const {
            uid,
            username,
            email,
            phoneNumber,
            password,
            classLevel,
            subjectsOffered,
        } = req.body;

        if (!uid) {
            return res.status(400).json({ error: "User ID is required" });
        }

        const userRef = doc(db, "users", uid);

        const updateData = {};
        if (username) updateData.username = username; 
        if (email) updateData.email = email;
        if (phoneNumber) updateData.phoneNumber = phoneNumber;
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            updateData.password = hashedPassword;
        }
        if (classLevel) updateData.classLevel = classLevel;
        if (subjectsOffered) updateData.subjectsOffered = subjectsOffered;

        await updateDoc(userRef, updateData);
        return res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
        console.error("Error updating user:", error);
        return res.status(500).json({ error: "Failed to update user" });
    }
}
