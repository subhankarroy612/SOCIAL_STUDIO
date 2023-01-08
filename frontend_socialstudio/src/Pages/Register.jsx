import React from 'react';
import '../Styles/register.css'
import {
    Button,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Text,
    useToast
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { register } from '../Redux/authReducer/actions';
import { AiTwotoneCamera } from 'react-icons/ai'

const Register = () => {
    const dispatch = useDispatch()
    const { registerState, regState } = useSelector((store) => store.auth)
    const [error, setError] = useState(false)
    const [file, setFile] = useState('');
    const toast = useToast()





    const [details, setDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        location: '',
        occupation: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails({ ...details, [name]: value });
    }

    const handleClick = () => {
        if (details.firstName && details.lastName && details.email && details.password && details.location && details.occupation && file) {
            setError(false)
            let fm = new FormData()
            fm.append('file', file)
            fm.append('upload_preset', 'social')
            dispatch(register(details, fm))
            if (registerState === 'User already exists' || error) {
                toast({
                    title: 'Error in this operation',
                    description: 'Please check for correct details',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })
            }
            if (regState) {
                toast({
                    title: 'Successfull',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
            }
        } else {
            setError(true)
            toast({
                title: 'Error in this operation',
                description: 'Please check for correct details',
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }
    }

    const handleFile = (e) => {
        setFile(e.target.files[0])
        document.querySelector('#imageName').innerText = e.target.files[0].name
    }

    return (
        <div id='register'>

            <div>
                <Text id='registerHead' as='b' >Welcome to SOCIAL STUDIO</Text>

                {
                    regState && toast({
                        title: 'Successfull',
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                    })
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

                    <FormLabel className='label' fontSize='xs'>Upload Picture</FormLabel>

                    <div style={{ border: '1px solid black' }}>
                        <label htmlFor="inputTag">
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <AiTwotoneCamera style={{}} size='30px' /> Upload
                            </div>
                            <br />
                            <input onChange={(e) => handleFile(e)} id="inputTag" type="file" />
                            <span color='teal' id="imageName"></span>
                        </label>
                    </div>

                    <Button disabled={regState} onClick={handleClick} marginTop='2vh' size='sm' colorScheme='linkedin'>Register</Button>
                </FormControl>

            </div>

        </div>
    );
}

export default Register;
