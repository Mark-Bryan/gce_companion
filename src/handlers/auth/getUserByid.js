import { db } from '../firebase.js';
import { doc, getDoc } from "firebase/firestore";

export async function getUserById(req, res) {
    try{
        const userId = req.params.id;

        if (!userId){
            return res.status(400).json({error: "User ID is required"});
        }

        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
            return res.status(404).json({error: "User not found"});
        }

        const userData = userSnap.data();
        delete userData.password; // Remove password from response for security
        return res.status(200).json({id: userSnap.id, ...userData});
    } catch (error) {
        console.error("Error fetching user:", error);
        return res.status(500).json({error: "Failed to fetch user"});
    }
}