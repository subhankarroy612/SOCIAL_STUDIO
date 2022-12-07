import React from 'react'
import { Button } from '@chakra-ui/react'
import '../Styles/navbar.css';
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/authReducer/actions';

export default function Navbar() {

    const { isAuth } = useSelector(store => store.auth)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(logout())
    }

    return (
        <div id='navbar'>

            <div>
                <Link to='/'><img src={logo} alt="Logo" /></Link>
            </div>

            <div id='NavbarButtons'>
                <Link to='/register'>
                    <Button variant='ghost' colorScheme='linkedin' size='sm'>Register</Button>
                </Link>
                <Link to='/login'>
                    <Button onClick={handleClick} colorScheme='linkedin' size='sm'>{isAuth ? 'Logout' : 'Login'}</Button>
                </Link>
            </div>

        </div>
    )
}
