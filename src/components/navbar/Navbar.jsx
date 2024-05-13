import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image';
import DarkModeToggle from '@/DarkModeToggle/DarkModeToggle';

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href={"/"}>
            <Image src="/car.png" height={35} width={55} alt="exre" />
            TDL
        </Link>
        <div className={styles.links}>
            <DarkModeToggle />
            <Link href={"/about"}>A propos</Link>
            <Link href={"/contact"}>Contact</Link>
            <Link href={"/dashboard"}>Dashboard</Link>
            <Link href={"/portofiolo"}>Portofolio</Link>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/logout"}>Logout</Link>
        </div>
    </div>
  )
}

export default Navbar