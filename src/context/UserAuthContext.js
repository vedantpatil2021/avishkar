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
    const [user, setUser] = useState({});
    const [roleId, setRoleId] = useState();

    async function logIn(email, password) {
        let userRole = "";
        console.log(userRole)
        if (email && password) {
            const q = query(collection(db, "user"), where("email", "==", email));
            const snapShot = await getDocs(q);
            snapShot.forEach((doc) => {
                if (doc.data().role) {
                    userRole = doc.data().role;
                    console.log(userRole)
                }
            });
        }
        console.log(userRole)
        setRoleId(userRole);
        console.log(roleId);
        return signInWithEmailAndPassword(auth, email, password);
    };
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function logOut() {
        return signOut(auth);
    }
    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            // console.log("Auth", currentuser);
            setUser(currentuser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <userAuthContext.Provider
            value={{ user, logIn, signUp, logOut, googleSignIn, roleId }}
        >
            {children}
        </userAuthContext.Provider>
    );
}

export function useUserAuth() {
    return useContext(userAuthContext);
}