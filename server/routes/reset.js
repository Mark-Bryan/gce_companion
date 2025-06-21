// routes/reset.js
import express from 'express';
import { auth } from '../firebase.js';
import { sendPasswordResetEmail } from 'firebase/auth';

const router = express.Router();

router.post('/api/auth/reset-password', async (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email is required' });

    try {
        await sendPasswordResetEmail(auth, email);
        res.status(200).json({ message: 'Password reset email sent' });
    } catch (error) {
        console.error('Error sending reset email:', error.message);
        res.status(500).json({ error: 'Failed to send password reset email' });
    }
});

export default router;
