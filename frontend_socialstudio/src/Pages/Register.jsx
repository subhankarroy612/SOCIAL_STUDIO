import React from 'react';
import '../Styles/register.css'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    Button,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Text
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { register } from '../Redux/authReducer/actions';

const Register = () => {
    const dispatch = useDispatch()
    const { registerState, regState } = useSelector((store) => store.auth)
    const [error, setError] = useState(false)

    const [details, setDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        location: '',
        occupation: '',
        avatar: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails({ ...details, [name]: value });
    }

    const handleClick = () => {
        if (details.firstName && details.lastName && details.email && details.password && details.location && details.occupation && details.avatar) {
            setError(false)
            dispatch(register(details))
        } else {
            setError(true)
        }
    }

    return (
        <div id='register'>

            <div>
                <Text id='registerHead' as='b' >Welcome to SOCIAL STUDIO</Text>

                {
                    regState && <Alert style={{ borderRadius: '20px', height: '40px' }} status='success'>
                        <AlertIcon />
                        Signed up Successfully!
                    </Alert>
                }

                {
                    registerState === 'Signup Successful' || registerState === "" ? "" : <Alert style={{ borderRadius: '20px', height: '40px' }} status='error'>
                        <AlertIcon />
                        <AlertTitle>User already exists!</AlertTitle>
                    </Alert>
                }
                {
                    error && <Alert style={{ borderRadius: '20px', height: '40px' }} status='error'>
                        <AlertIcon />
                        <AlertTitle>Please fill all the details!</AlertTitle>
                    </Alert>
                }

                <FormControl isRequired>
                    <FormLabel className='label' fontSize='xs'>Name</FormLabel>
                    <HStack>
                        <Input name='firstName' onChange={handleChange} size='sm' placeholder='First name' />
                        <Input name='lastName' onChange={handleChange} size='sm' placeholder='Last name' />
                    </HStack>

                    <FormLabel className='label' fontSize='xs'>Email</FormLabel>
                    <Input name='email' onChange={handleChange} size='sm' placeholder='Email' />

                    <FormLabel className='label' fontSize='xs'>Password</FormLabel>
                    <Input name='password' onChange={handleChange} size='sm' placeholder='Password' />

                    <FormLabel className='label' fontSize='xs'>Location</FormLabel>
                    <Input name='location' onChange={handleChange} size='sm' placeholder='Location' />

                    <FormLabel className='label' fontSize='xs'>Occupation</FormLabel>
                    <Input name='occupation' onChange={handleChange} size='sm' placeholder='Occupation' />

                    <FormLabel className='label' fontSize='xs'>Image URL</FormLabel>
                    <Input name='avatar' onChange={handleChange} size='sm' placeholder='Image URL' />

                    <Button onClick={handleClick} marginTop='2vh' size='sm' colorScheme='linkedin'>Register</Button>
                </FormControl>

            </div>

        </div>
    );
}

export default Register;
