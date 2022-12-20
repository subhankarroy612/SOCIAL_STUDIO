import React from 'react';
import { Route, Routes } from 'react-router-dom'
import SingleUser from '../Components/SingleUser';
import PrivateRoute from '../hoc/PrivateRoute';
import Home from '../Pages/Home';
import Login from '../Pages/Login'
import Register from '../Pages/Register';


const AllRoutes = () => {
    return <Routes>
        <Route path='/' element={<PrivateRoute> <Home /> </PrivateRoute>} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/register' element={<Register />} ></Route>
        <Route path='/singleUser/:id' element={< SingleUser />} ></Route>
    </Routes>
}

export default AllRoutes;
