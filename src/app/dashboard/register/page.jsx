"use client"
import React,{useState} from 'react'
import Link from "next/link"
import { useRouter } from 'next/navigation'


const Register = () => {
  const[err,setErr]=useState(false)
  const handleSubmit=async (e)=>{
    e.preventDefault();
    const name=e.target[0].value;
    const email=e.target[1].value;
    const password=e.target[2].value;
   const router =useRouter
    try {
      const res=await fetch("/api/auth/register/", {
        method:"POST",
        headers:{
          "content-Type":"application/json"
        },
        body:JSON.stringify({name,email,password}),
      });
      res.status==201 &&  router.push("/ldashboard/login?success=Account has been created");
    } catch (error) {
      console.log(error.message);
      setErr(true);
    }
  }
  return (
    <div>
      <form style={{justifyContent:"center",alignItems:"center"}} onSubmit={handleSubmit}>
        <div>
          <input type="text" required placeholder='Nom' />
        </div>
        <div>
          <input type="text" required placeholder='Email' />
        </div>
        <div>
          <input type="password" required placeholder='Mot de passe' />
        </div>
        <div style={{marginTop:8}}>
          <button type="submit" style={{backgroundColor:"green",color:"white",height:40, outline:"none", padding:"12px 12px"}}>Connexion</button>
        </div>
        {err && "Une erreur s'est produite dans le systeme"}
        <Link href="/dashboard/login">Login depuis un compte existant</Link>
      </form>
    </div>
  )
}

export default Register