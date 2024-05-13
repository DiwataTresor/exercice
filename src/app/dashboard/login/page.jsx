"use client"
import React,{useState} from 'react'
import {signIn,useSession} from "next-auth/react"
import Image from "next/image";


const Login = () => {
  const s=useSession();
  console.log(s);
  return (
    <div style={{display:"flex",alignItems:"center", justifyContent:"center"}}>
      {
        s?.status=="authenticated"?
        <div>
          <p>Bienvenue {s?.data?.user.name} </p>
          <Image width={80} height={80} src={`${s?.data.user.image}`} /></div>
        :
        <button onClick={()=>signIn("google")}>Login with Google</button>
      }
      
    </div>
  )
}

export default Login