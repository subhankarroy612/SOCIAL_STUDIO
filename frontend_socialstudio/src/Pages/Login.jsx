import { Alert, AlertIcon, AlertTitle, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import '../Styles/login.css'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../Redux/authReducer/actions';
import { Navigate } from 'react-router-dom';


const Login = () => {

    const dispatch = useDispatch()
    const { isAuth, token } = useSelector(store => store.auth)
    const [error, setError] = useState(false)

    let [details, setDetails] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setDetails({ ...details, [name]: value })
    }

    const handleClick = () => {
        dispatch(login(details))
        if (isAuth) {
            localStorage.setItem('authToken', token)
        }else{
            setError(!error)
        }
    }
    
    if(isAuth)
    return <Navigate to='/' />

    return (
        <div id='login'>

            <div>
                <div id='loginForm'>
                    <Text id='registerHead' as='b' >Sign in to your account</Text>
                    {
                        error && <Alert style={{ borderRadius: '20px', height: '40px' }} status='error'>
                            <AlertIcon />
                            <AlertTitle>Wrong Credentials</AlertTitle>
                        </Alert>
                    }
                    <FormControl isRequired>

                        <FormLabel className='label'>Email</FormLabel>
                        <Input name='email' onChange={handleChange} placeholder='Email' />

                        <FormLabel className='label' >Password</FormLabel>
                        <Input name='password' onChange={handleChange} placeholder='Password' />

                        <Button onClick={handleClick} marginTop='2vh' size='sm' colorScheme='linkedin'>Login</Button>

                    </FormControl>
                </div>

            </div>

            <div id='loginImg' >
                <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="pic" />
            </div>


        </div>
    );
}

export default Login;
