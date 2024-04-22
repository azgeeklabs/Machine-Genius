'use client'
import React, { useState } from 'react'
import styles from './contentCreator.module.css'
import SideNav from '../_components/SideNav/SideNav';
import TitleOfPage from '../_components/TitleOfPage/TitleOfPage';


const layout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false);
  return (
    <div className='w-full h-100vh p-0 flex'>
      <div className={`${styles.Side_Nav_Wrapper} ${isSideNavOpen ? '' : styles.close}`}>
        <SideNav isSideNavOpen={isSideNavOpen} setIsSideNavOpen={setIsSideNavOpen} />
      </div>
      <div className={styles.Page_Wrapper}>
        <TitleOfPage title="Templates"  />
        <div className='py-5'>
        {children}
        </div>
      </div>
    </div>
  )
}

export default layout
