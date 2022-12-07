import { Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import React from 'react';
import '../Styles/login.css'


const Login = () => {
    return (
        <div id='login'>

            <div>
                <div id='loginForm'>
                    <Text id='registerHead' as='b' >Sign in to your account</Text>
                    <FormControl isRequired>

                        <FormLabel className='label'>Email</FormLabel>
                        <Input name='email' onChange={() => { }}  placeholder='Email' />

                        <FormLabel className='label' >Password</FormLabel>
                        <Input name='password' onChange={() => { }} placeholder='Password' />
         
                        <Button onClick={()=>{}} marginTop='2vh' size='sm' colorScheme='linkedin'>Login</Button>

                    </FormControl>
                </div>

            </div>

            <div id='loginImg' >
                <img  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="pic" />
            </div>


        </div>
    );
}

export default Login;
