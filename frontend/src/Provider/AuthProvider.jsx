import React, {  createContext, useEffect, useState } from 'react'
import { auth } from '../../public/_firebase_init'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import useAxiosPublic from '../Hooks/useAxiosPublic'

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
export default function AuthProvider({children}) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const axiosPublic = useAxiosPublic();
  const createUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const updateUserProfile =(name, photo,phoneNumber, address)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,{
      displayName:name,
      photoURL: photo,
      phoneNumber: phoneNumber,
      address: address
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
        if(currentUser?.email){
          const user = {email: currentUser.email}
          axiosPublic.post("/jwt", user)
          .then((result)=>{
            if(result?.data?.token){
              localStorage.setItem("access-token", result.data.token)
            }
            setLoading(false)
          })
          setLoading(false)
        }
       else{
        localStorage.removeItem("access-token")
        setUser(null)
        setLoading(false)
       }
      })
    }
    return unsubscribe()
  }, [axiosPublic])

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
