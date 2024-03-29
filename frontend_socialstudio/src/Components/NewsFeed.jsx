import { Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { MdInsertComment } from "react-icons/md"
import { useSelector } from 'react-redux'
import { url } from './url'

let prevtime = {};


export default function NewsFeed(ele) {
    function throtler(cb) {
        if ((Date.now() - prevtime[ele.i]) / 1000 < 5)
            return;
        prevtime[ele.i] = Date.now();
        cb();
    }

    const [like, setLike] = useState();
    const { token, userDetails } = useSelector((store) => store.auth);
    const [nofLikes, setNlikes] = useState(ele.likes?.length || 0);

    const likeOrDislike = async () => {
        if (like)
            try {
                await axios.post(url + "/blogs/like", { blog: ele._id }, {
                    headers: { token }
                });
                setNlikes(c => c + 1)
            } catch (e) {
                console.log(e);
                return;
            }

        else
            try {
                await axios.post(url + "/blogs/dislike", { blog: ele._id }, {
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
    }, [ele?.likes, userDetails._id])

    return (
        <div>
            {

                <div id='postsCard' >
                    <div className='mainDiv'>
                        <div className='cardChild'>
                            <img className='profilePic' src={ele.user.avatar} alt="userImg" />
                            <Link to={`/singleUser/${ele.user._id}`}> <Text style={{ marginLeft: '1vw' }} fontSize='sm' as='b'>{ele.user.firstName}</Text></Link>
                        </div>

                    </div>
                    <Text style={{ marginBottom: '2vh' }} fontSize='sm'>{ele.description}</Text >
                    <img style={{ borderRadius: '8px', width: '100%' }} src={ele.imageUrl} alt="" />
                    <div className='postButtons'>
                        <button
                            className='like'
                            onClick={() => throtler(likeOrDislike)}
                        >
                            <img src={like ? "https://img.icons8.com/ios/2x/hearts.png" : "https://img.icons8.com/emoji/2x/red-heart.png"} alt="" />
                            {nofLikes}
                        </button>
                        <button>
                            <MdInsertComment fontSize={"30px"}></MdInsertComment>
                            {0}
                        </button>


                    </div>
                </div>

            }
        </div>
    )
}
