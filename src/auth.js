import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "./firebaseConfig.js";

export async function login(email, password) {
    let user = null;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        user = userCredential.user;
    } catch (error) {
        console.error("Login Failed:", error.message);
    }

    return user;
}