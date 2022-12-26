import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getSingleUser } from '../Redux/homeReducer/actions';
import { useParams } from 'react-router-dom'
import "../Styles/singleUser.css";
import axios from 'axios';
import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { getUserDetails } from '../Redux/authReducer/actions';

function idToDate(id) {
    return new Date(parseInt(id.toString().slice(0, 8), 16) * 1000).toDateString() || null;
}

const SingleUser = () => {

    const dispatch = useDispatch()
    const { singleUserBlogs, singleUserDetails, loadingSingleUserDetails } = useSelector(s => s.home)
    const { userDetails, token, loadingUser } = useSelector(store => store.auth)
    const { id } = useParams();
    const [follow, setFollow] = useState(false)
    const [followers, setFollowers] = useState(0)


    useEffect(() => {
        dispatch(getSingleUser(id, localStorage.getItem('authToken')));
        dispatch(getUserDetails(token))
    }, []);

    useEffect(() => {
        loadingUser && loadingSingleUserDetails && setFollow(singleUserDetails.follow.includes(userDetails._id))
        loadingSingleUserDetails && setFollowers(singleUserDetails.follow.length)
    }, [singleUserDetails]);


    const handleFollow = async () => {
        setFollow(!follow)
        setFollowers(c => follow ? c - 1 : c + 1)
        try {
             await axios.post(`http://localhost:8000/users/${follow ? 'unfollow' : 'follow'}/${id}`, {}, {
                headers: {
                    token
                }
            })
        } catch (e) {
            console.log(e.message);
        }
    }

    return (
        <div className='singleUser'>
            <div className='profile'>
                <img src={singleUserDetails.avatar} alt="" />
                <div>
                    <h1>{singleUserDetails.firstName}{singleUserDetails.lastName}</h1>
                    <p className='flex'>
                        <img className='icon' src="https://cdn-icons-png.flaticon.com/128/2099/2099199.png" alt="" />
                        {singleUserDetails.email}</p>
                    <p className='flex'>
                        <img className='icon' src="https://cdn-icons-png.flaticon.com/128/3179/3179068.png" alt="" />
                        {singleUserDetails.location}</p>
                    <p className='flex'>
                        <img className='icon' src="https://cdn-icons-png.flaticon.com/128/3119/3119181.png" alt="" />
                        {singleUserDetails.occupation}</p>
                    <Button onClick={handleFollow} variant='solid' bgColor={'teal'} color='white'>{follow ? 'Unfollow' : 'Follow'}</Button>
                    <p>Followers: {followers}</p>
                </div>
            </div>
            <h1>recent posts</h1>
            <div className='blog'>
                {
                    singleUserBlogs.map((e, i) => (
                        <div key={i}>
                            <img src={e.imageUrl} alt="" />
                            <div>
                                <h2>{e.description}</h2>
                                <p>posted on {idToDate(e._id)}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default SingleUser;
