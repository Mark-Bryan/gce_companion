
import { db } from '../firebase.js';
import { doc, getDoc } from 'firebase/firestore';

export async function getUserById(req, res) {
    try {
        const userId = req.params.id;

        if (!userId) {
            return res.status(400).json({ error: 'User ID is required' });
        }

        const userRef = doc(db, 'users', userId);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
            return res.status(404).json({ error: 'User not found' });
        }

        const userData = userSnap.data();

        delete userData.password;
        return res.status(200).json({
            status: 200,
            data: {
                id: userSnap.id,
                ...userData
            }
        });
    } catch (error) {
        console.error('Error fetching user:', error.message);
        return res.status(500).json({ error: 'Server error' });
    }
}

