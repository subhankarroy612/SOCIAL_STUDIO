import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getSingleUser } from '../Redux/homeReducer/actions';
import { useParams } from 'react-router-dom'

const SingleUser = () => {

    const dispatch = useDispatch()
    const { singleUserBlogs, singleUserDetails } = useSelector(s=>s.home)
    const { id } = useParams()

    useEffect(() => {
        dispatch(getSingleUser(id, localStorage.getItem('authToken')))
    }, []);

    console.log(singleUserBlogs, singleUserDetails);

    return (
        <div>

        </div>
    );
}

export default SingleUser;
