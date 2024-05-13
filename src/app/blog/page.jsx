
import React from 'react'
import Link from "next/link"

async function getData() {
  const res= await fetch("http://localhost:3000/api/posts",{cache:"no-store"});
  if(!res.ok)
  {
    throw new Error("Echec de l'api");
   
  }
  return res.json();
}
const Blog = async () => {
  
  const data=await getData();
  return (
    <div style={{backgroundColor:"indigo", height:"content", padding:"12px"}}>
      <h1>Mon blog simple</h1><hr />
        <div style={{marginBottom:15}}></div>
        {data.map((l,i)=>{
          return(<div key={l.id} style={{height:45}}>
            {i+1} - {l.title}(<Link href={`/blog/${l.id}`}><span style={{fontSize:10}}>Lire article</span></Link>)
          </div>)})
        }
    </div>
  )
}

export default Blog