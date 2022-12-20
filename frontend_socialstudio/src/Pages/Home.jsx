import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Styles/home.css'
import { getUserDetails } from '../Redux/authReducer/actions';
import { MdLocationOn } from 'react-icons/md'
import { RiSuitcaseFill } from 'react-icons/ri'
import { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { AiOutlineUserAdd } from 'react-icons/ai'
import {
    Text
} from '@chakra-ui/react'
import { getPosts } from '../Redux/homeReducer/actions';
import PostImage from '../Components/PostImage';

const Home = () => {

    //create a component to map alll the posts.

    const { userDetails, token } = useSelector(store => store.auth)
    const { allPosts } = useSelector(store => store.home)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserDetails(token))
        dispatch(getPosts())
    }, [dispatch, token]);


    return (
        <div id='home'>

            <div>
                <div id='userDetails'>
                    <div className='userAlign'>
                        <img className='profilePic' src={userDetails.avatar} alt="proPic" />
                        <h2 style={{ marginLeft: '1vw', fontWeight: 'bold', color: 'black' }}>{userDetails.firstName + ' ' + userDetails.lastName}</h2>
                    </div>

                    <hr className='hr' />

                    <div className='userAlign'>
                        <MdLocationOn color='red' className='svj' />
                        <p> {userDetails.location}</p>
                    </div>
                    <div className='userAlign'>
                        <RiSuitcaseFill className='svj' />
                        <p>{userDetails.occupation}</p>
                    </div>

                    <hr className='hr' />

                    <div id='socialProfiles'>
                        <h3 style={{ fontWeight: 'bold', color: 'black' }}>Social Profiles</h3>
                        <div>
                            <BsTwitter color='#1da1f2' className='svj' />
                            <p>Twitter</p>
                        </div>
                        <div>
                            <BsLinkedin color='#1da1f2' className='svj' />
                            <p>Linkedin</p>
                        </div>
                    </div>

                </div>

                <div id='posts'>

                    <PostImage></PostImage>
                    <div id='newsFeed' >
                        {
                            allPosts.map((ele, i) => {
                                return <div id='postsCard' key={i}>
                                    <div className='mainDiv'>
                                        <div className='cardChild'>
                                            <img className='profilePic' src={ele.user.avatar} alt="userImg" />
                                            <Text style={{ marginLeft: '1vw' }} fontSize='sm' as='b'>{ele.user.firstName}</Text>
                                        </div>

                                        {
                                            ele.user._id !== userDetails._id ?
                                                <AiOutlineUserAdd>haba</AiOutlineUserAdd> : ''
                                        }


                                    </div>
                                    <Text style={{ marginBottom: '2vh' }} fontSize='sm'>{ele.description}</Text >
                                    <img style={{ borderRadius: '8px', width: '100%' }} src={ele.imageUrl} alt="" />
                                </div>

                            })
                        }
                    </div>

                </div>

                <div id='friendList'>
                    <h2 style={{ marginLeft: '1vw', fontWeight: 'bold', color: 'black' }}>Sponsored</h2>
                </div>
            </div>

        </div>
    )
}

export default Home;
