import React from 'react'
import '../Estilos/Navbar.css'
import { useNavigate, Link } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();

  const handleLogOut = () =>{
    navigate('*')
  }
  const handlewelcomepage = () =>{
    navigate('/Profile')
  }

  return (
        <nav className="navbar">
        <div className="navbar-logo">
          <a onClick={handlewelcomepage}>Welcome Page </a>
        </div>
          
          <a onClick={handleLogOut}>Log out</a>
        </nav>
  )
}

export default Navbar