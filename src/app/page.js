"use client"
import Image from "next/image";
import styles from "./page.module.css";
import img1 from "public/img1.png";
import { useEffect } from "react";

export default function Home() {
  const test=async()=>{
     
     let response = await fetch("http://api.oxerode.com/rva_siteweb/api.php?qry=aeroports", { 
       method: "GET"
     }).then(r=>r.json()).then(r=>{

       console.log(r);
     })
    //  let data = await response.json();
  }
  useEffect(()=>{
   test();  
  },[])
  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <h1 className={styles.title}>Better design for your digital product</h1>
        <p className={styles.desc}>
          Incididunt eiusmod minim voluptate sit laborum dolor fugiat nulla anim
          culpa et non est. Ipsum duis veniam enim minim sint do.
        </p>
        <button className={styles.button}>Voir nos projets</button>
      </div>
      <div className={styles.imgContainer}>
        <Image
          width={500}
          height={500}
          className={styles.img}
          src={img1}
          alt="1"
        />
      </div>
    </div>
  );
}
