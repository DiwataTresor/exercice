"use client";
import React,{useContext} from 'react'
import style from "./darkModeToggle.module.css"
import { ThemeContext } from '@/context/ThemeContext'


const DarkModeToggle = () => {

  const {toggle,mode}=useContext(ThemeContext);
  return (
    <div className={style.container} onClick={toggle}>
        <span>D</span>
        <span>L</span>
        <div className={style.ball} style={mode==="light"?{left:"2px"}:{right:"2px"}} />
    </div>
  )
}

export default DarkModeToggle