import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Styles/home.css'
import { getUserDetails } from '../Redux/authReducer/actions';

const Home = () => {

    //create another route to fetch the user details dynamically both front and backend
    const { userDetails, token } = useSelector(store => store.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserDetails(token))
    }, []);

    return (
        <div id='home'>

            <div>
                <div id='userDetails'>
                    <div>
                        <img src={userDetails.avatar} alt="proPic" />
                        <h2 style={{ marginLeft: '1vw', fontWeight: 'bold', color: 'black' }}>{userDetails.name}</h2>
                    </div>
                    <hr className='hr' />
                    <p>Location: {userDetails.location}</p>
                    <p>Profession: {userDetails.occupation}</p>
                </div>  

                <div id='posts'>
                    <p>adasdadsdsa</p>
                    <p>adasdadsdsa</p>
                    <p>adasdadsdsa</p>
                </div>

                <div id='friendList'>
                    <p>adasdadsdsa</p>
                    <p>adasdadsdsa</p>
                    <p>adasdadsdsa</p>
                </div>
            </div>

        </div>
    );
}

export default Home;
