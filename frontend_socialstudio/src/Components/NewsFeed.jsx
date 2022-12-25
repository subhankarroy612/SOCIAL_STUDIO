import { Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

export default function NewsFeed(ele) {

    const [like, setLike] = useState();
    const { token, userDetails } = useSelector((store) => store.auth);
    const [nofLikes, setNlikes] = useState(ele.likes?.length || 0);

    const likeOrDislike = async () => {
        if (like)
            try {
                await axios.post("http://localhost:8000/blogs/like", { blog: ele._id }, {
                    headers: { token }
                });
                setNlikes(c => c + 1)
            } catch (e) {
                console.log(e);
                return;
            }

        else
            try {
                await axios.post("http://localhost:8000/blogs/dislike", { blog: ele._id }, {
                    headers: { token }
                });
                setNlikes(c => c - 1)
            } catch (e) {
                console.log(e);
                return;
            }

        setLike(!like);
    }

    useEffect(() => {
        let arr = ele?.likes || [];
        setLike(!arr.includes(userDetails._id));
    }, [])

    return (
        <div>
            {

                <div id='postsCard' >
                    <div className='mainDiv'>
                        <div className='cardChild'>
                            <img className='profilePic' src={ele.user.avatar} alt="userImg" />
                            <Link to={`/singleUser/${ele.user._id}`}> <Text style={{ marginLeft: '1vw' }} fontSize='sm' as='b'>{ele.user.firstName}</Text></Link>
                        </div>

                        <button
                            className='like'
                            onClick={likeOrDislike}
                        >
                            <img
                                src={like ? "https://img.icons8.com/ios/2x/hearts.png" : "https://img.icons8.com/emoji/2x/red-heart.png"}
                                alt="" />
                            {nofLikes}
                        </button>


                    </div>
                    <Text style={{ marginBottom: '2vh' }} fontSize='sm'>{ele.description}</Text >
                    <img style={{ borderRadius: '8px', width: '100%' }} src={ele.imageUrl} alt="" />
                </div>

            }
        </div>
    )
}
