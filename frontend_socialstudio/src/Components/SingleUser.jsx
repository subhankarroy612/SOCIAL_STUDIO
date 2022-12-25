import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getSingleUser } from '../Redux/homeReducer/actions';
import { useParams } from 'react-router-dom'
import "../Styles/singleUser.css";

function idToDate(id) {
    return new Date(parseInt(id.toString().slice(0, 8), 16) * 1000).toDateString() || null;
}

const SingleUser = () => {

    const dispatch = useDispatch()
    const { singleUserBlogs, singleUserDetails } = useSelector(s => s.home)
    const { id } = useParams()

    useEffect(() => {
        dispatch(getSingleUser(id, localStorage.getItem('authToken')))
    }, []);
    console.log(singleUserBlogs)

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
                    <button className='btn'>follow</button>
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
