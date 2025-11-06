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
        
        <ul className='points'>
            <li className='list'>Home</li>
            <li className='list'>Gallery</li>
            <li className='list'>About Us</li>
            <li className='list'>Contact Us</li>
        </ul>

        <div className='login'>
            <button className='lgbtn' onClick={handleClickLogin}>Login</button>
        </div>
        
    </div>
  )
}

export default Navbar