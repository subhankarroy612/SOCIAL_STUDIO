import { Button, FormControl, FormLabel, Input, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import '../Styles/login.css'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../Redux/authReducer/actions';
import { Navigate } from 'react-router-dom';


const Login = () => {

    const dispatch = useDispatch()
    const { isAuth, token, logState } = useSelector(store => store.auth)
    const toast = useToast()

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
        }
    }

    if (isAuth){
        toast({
            title: 'Successfull',
            status: 'success',
            duration: 5000,
            isClosable: true,
        })
        return <Navigate to='/' />
    }

    return (
        <div id='login'>

            {
                logState &&  toast({
                    title: 'Wrong Credentials',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })
            }

            <div className='login1'>
                <Text id='registerHead' as='b' >Sign in to your account</Text>

                <FormControl isRequired>

                    <FormLabel className='label'>Email</FormLabel>
                    <Input name='email' onChange={handleChange} placeholder='Email' />

                    <FormLabel className='label' >Password</FormLabel>
                    <Input name='password' onChange={handleChange} placeholder='Password' />

                    <Button isLoading={isAuth} onClick={handleClick} marginTop='2vh' size='sm' colorScheme='linkedin'>Login</Button>

                </FormControl>
            </div>

            <div id='loginImg' >
                <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="pic" />
            </div>


        </div>
    );
}

export default Login;
