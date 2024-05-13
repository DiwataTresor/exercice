import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import graphic from "public/graphic.png";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src={graphic} 
          // fill={true} 
          alt="" 
          className={styles.img}
          style={{width:"300px", height:"300px"}}
        />
        <div className={styles.imgText}>
          <h1>Digital story</h1>
        </div>
      </div>
      <div className={styles.textContainer}></div>
    </div>
  );
};

export default About;
