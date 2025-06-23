import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

signOut(auth)
    .then(() => {
        console.log("User signed out.");
        // Redirect or update UI
    })
    .catch((error) => {
        console.error("Error signing out:", error);
    });
