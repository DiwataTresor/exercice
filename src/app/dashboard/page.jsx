"use client"
import React from 'react'
import Link from "next/link"
import { useSession } from 'next-auth/react'


import Uppy from '@uppy/core';
import Webcam from '@uppy/webcam';
import { Dashboard as Dash } from '@uppy/react';

// Don't forget the CSS: core and the UI components + plugins you are using.
import '@uppy/core/dist/style.min.css';
import '@uppy/dashboard/dist/style.min.css';
import '@uppy/webcam/dist/style.min.css';
import XHR from '@uppy/xhr-upload';
import French from '@uppy/locales/lib/fr_FR';
import GoogleDrive from '@uppy/google-drive';

const Dashboard = () => {
  const session=useSession();
  const uppy = new Uppy({
    debug: true,
    autoProceed: true,
    locale: French,
  })
    .use(Webcam)
    .use(XHR, { endpoint: 'https://your-domain.com/upload' })
  console.log(session);
  return (
    <div>

      <div>Dashboard</div>
      <Link href={`/dashboard/login`}><h1><span>Login</span></h1></Link>
   
      <div>
      <Dash uppy={uppy} plugins={['Webcam']} />
      </div>
    </div>
  )
}

export default Dashboard