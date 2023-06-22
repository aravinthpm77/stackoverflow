import React from "react"
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import search from '../../assets/search.svg'
import Avatar from '../Avatar/Avatar'
import './Navbar.css'


const Navbar = () => {

    var User = null

    return(
        <nav className="main-nav">
            <div class='navbar' >
                <Link to='/' className="nav-logo">
                    <img src={logo} alt="logo" />
                </Link>
                <Link to='/' className='nav-item nav-btn'>About</Link>
                <Link to='/' className='nav-item nav-btn'>Products</Link>
                <Link to='/' className='nav-item nav-btn'>For Teams</Link>
                <form>
                    <input type="text" placeholder="Search"></input>
                    <img src={search} alt="search" className="icon" width="16"/>
                </form>
                { User === null ?
                    <Link to='/Auth' className='nav-item nav-links'>Log in</Link> :
                    <>
                        <Link to="/User"><Avatar>A</Avatar></Link>
                        <button className="nav-item nav-links">Log Out</button>

                    </>
                }
            </div>
        </nav>
        

    )
}

export default Navbar