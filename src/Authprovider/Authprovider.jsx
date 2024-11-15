import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebaseinit";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const Authcontext = createContext();
const Authprovider = ({children}) => {

    const [user , setUser] = useState(null);

    const [loading , setLoading] = useState(true)

    const Signup = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const singOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser || null); 
            setLoading(false)
        });

        return () => {
            unsubscribe();
        };
    }, []);

        const Onauth = {
            Signup,
            user,
            setUser,
            login,
            singOut,
            loading,
        }
    return (
        <Authcontext.Provider value={Onauth}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;