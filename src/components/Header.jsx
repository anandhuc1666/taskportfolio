import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <h2>AD</h2>
            <div className='header-list'>
                <Link to={'/'} style={{textDecoration:'none',color:'black'}}><li>Home</li></Link>
                <Link to={'/Project'}  style={{textDecoration:'none',color:'black'}}><li>Project</li></Link>
                <Link to={'/Contact'}  style={{textDecoration:'none',color:'black'}}><li>Contact</li></Link> 
            </div>
        </div>
    )
}

export default Header