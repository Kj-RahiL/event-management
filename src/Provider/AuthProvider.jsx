import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";


export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const fbProvider = new FacebookAuthProvider()

    // create user
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // signIn user
    const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = ()=>{
       return signInWithPopup(auth, googleProvider )
    }

    // fb login
    const fbLogin = ()=>{
        return signInWithPopup(auth, fbProvider)
    }
    // sign out user
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    // observe
   useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        setLoading(false)
        setUser(currentUser);
        console.log('current user', currentUser)
    })
    return ()=>{
        unSubscribe()
    }
   },[])


    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        googleLogin,
        fbLogin,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;