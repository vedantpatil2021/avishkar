import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/Firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/Firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [userRole, setUserRole] = useState("");
    const [user, setUser] = useState({});

    function logIn(email, password) {
        localStorage.setItem("userEmail", email);
        return signInWithEmailAndPassword(auth, email, password);
    }

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        localStorage.clear();
        setUserRole("");
        return signOut(auth);
    }

    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentuser) => {
            //   console.log("Auth", currentuser);
            let email = localStorage.getItem("userEmail");
            if (email) {
                const q = query(collection(db, "user"), where("email", "==", email));
                const snapShot = await getDocs(q);
                snapShot.forEach((doc) => {
                    if (doc.data().role) {
                        setUserRole(doc.data().role);
                    }
                });
            }
            setUser(currentuser);
        });
        return () => {
            unsubscribe();
        };
    }, [userRole]);

    return (
        <userAuthContext.Provider
            value={{ user, userRole, logIn, signUp, logOut, googleSignIn }}
        >
            {children}
        </userAuthContext.Provider>
    );
}

export function useUserAuth() {
    return useContext(userAuthContext);
}