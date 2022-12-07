import React from 'react'
import { Button } from '@chakra-ui/react'
import '../Styles/navbar.css';
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div id='navbar'>

            <div>
                <Link to='/'><img src={logo} alt="Logo" /></Link>
            </div>

            <div id='NavbarButtons'>
                <Link to='/register'><Button variant='ghost' colorScheme='linkedin' size='sm'>Register</Button></Link>
                <Link to='/login'><Button colorScheme='linkedin' size='sm'>Login</Button></Link>
            </div>


        </div>
    )
}
