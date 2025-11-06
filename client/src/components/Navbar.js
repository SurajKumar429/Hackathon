import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    const handleClickLogin = ()=>{
        navigate("/login")
    }
  return (
    <div className='navbar'>
        <div className='logo'>
           <h1>🌾 FarmConnect</h1>
        </div>
        
        <div className='points'>
            <a href="#home" className='list'>Home</a>
            <a href="#Gallery" className='list'>Gallery</a>
            <a href='#about' className='list'>About Us</a>
            <a href='#footer' className='list'>Contact Us</a>
        </div>

        <div className='login'>
            <button className='lgbtn' onClick={handleClickLogin}>Login</button>
        </div>
        
    </div>
  )
}

export default Navbar