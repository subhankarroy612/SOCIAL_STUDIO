import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Styles/home.css'
import { getUserDetails } from '../Redux/authReducer/actions';
import { MdLocationOn } from 'react-icons/md'
import { RiSuitcaseFill } from 'react-icons/ri'
import { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { FiImage } from 'react-icons/fi'
import {
    Input,
    Button
} from '@chakra-ui/react'
import { getPosts } from '../Redux/homeReducer/actions';

const Home = () => {

    //create a component to map alll the posts.

    const { userDetails, token } = useSelector(store => store.auth)
    const { allPosts } = useSelector(store => store.home)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserDetails(token))
        dispatch(getPosts())
    }, [dispatch,token]);

    console.log(allPosts);

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
                    <div id='postDiv' >
                        <div id='postInput' >
                            <img className='profilePic' src={userDetails.avatar} alt="proPic" />
                            <Input size='sm' placeholder={"What's on your mind.."} />
                        </div>
                        <hr className='hr' />
                        <div id='postBtn'>
                            <Button size='sm' colorScheme='teal' variant='ghost'>
                                <FiImage style={{ marginRight: '5px' }} />
                                Image
                            </Button>
                            <Button size='sm' colorScheme='linkedin' variant='solid'>
                                POST
                            </Button>
                        </div>
                    </div>

                    <div id='newsFeed'>
                        {
                            allPosts.map((ele)=>{
                                return <div>
                                    <img src={ele.picture} alt="postPic" />
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
    );
}

export default Home;
