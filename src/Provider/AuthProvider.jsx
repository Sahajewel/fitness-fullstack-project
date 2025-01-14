import React, {  createContext, useEffect, useState } from 'react'
import { auth } from '../../public/_firebase_init'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()
export default function AuthProvider({children}) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null)
  const createUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const updateUserProfile =(name, photo)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,{
      displayName:name,
      photoURL: photo
    })
  }
  const google = ()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
  const signIn =(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  useEffect(()=>{
    const unsubscribe=()=>{
      onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setLoading(false)
      })
    }
    return unsubscribe()
  }, [])
  const logout = ()=>{
    setLoading(true)
  return  signOut(auth)
  }
    const AuthInfo = {
      createUser,
      loading,
      updateUserProfile,
      google, 
      signIn,
      user, 
      logout
    }
  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}
