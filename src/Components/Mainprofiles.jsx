import React from 'react'
import Profile from './Profile'
import Navbar from './Navbar'
import '../Estilos/Mainprofiles.css'

function Mainprofiles() {
  return (
    <>
    <Navbar/>
    <h1>Choose a character</h1>
        <div className='profile-wrapper-container'>
        <Profile/>
        <Profile/>
        <Profile/>
        </div>
    
    </>
  )
}

export default Mainprofiles