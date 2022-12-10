import { useSelector } from 'react-redux';
import '../Styles/home.css'

const Home = () => {

    //create another route to fetch the user details dynamically both front and backend

    const { userDetails } = useSelector(store => store.auth)

    return (
        <div id='home'>

            <div>
                <div id='userDetails'>
                    <div>
                        <img src={userDetails[0]} alt="proPic" />
                        <h2 style={{ marginLeft: '1vw', fontWeight: 'bold', color: 'black' }}>{userDetails[3]}</h2>
                    </div>
                    <hr className='hr' />
                    <p>Location: {userDetails[4]}</p>
                    <p>Profession: {userDetails[2]}</p>
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
