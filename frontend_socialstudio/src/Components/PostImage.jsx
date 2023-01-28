import React, { useState } from 'react';
import {
    Input,
    Button,
    useToast,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { FiImage } from 'react-icons/fi';
import { setPosts } from '../Redux/homeReducer/actions';
import '../Styles/home.css'

const PostImage = () => {

    const { userDetails, token } = useSelector(store => store.auth)

    const [file, setFile] = useState(false)
    const [img, setImg] = useState("");
    let [description, setD] = useState("")
    const dispatch = useDispatch();
    const toast = useToast();

    const upload = async () => {
        let fm = new FormData();
        fm.append("file", img);
        fm.append("upload_preset", "social");
        dispatch(setPosts(fm, { description }, token)).then((r) => {
            if (r) {
                toast({
                    title: 'Posted successfully!',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
            }
        }).catch((err) => {
            toast({
                title: 'Unable to post!',
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        });
        setFile(false);
    }

    return (

        <div id='postDiv' >
            <div id='postInput' >
                <img className='profilePic' src={userDetails.avatar} alt="proPic" />
                <Input onChange={(e) => setD(e.target.value)} size='sm' placeholder={"What's on your mind.."} />
            </div>
            <hr className='hr' />
            {
                file && (<div>
                    <input type="file" onChange={(e) => setImg(e.target.files[0])} name="" id="" />
                </div>)

            }

            <div id='postBtn'>
                <Button onClick={() => setFile(!file)} size='sm' colorScheme='teal' variant='ghost'>
                    <FiImage style={{ marginRight: '5px' }} />
                    Image
                </Button>
                <Button size='sm' colorScheme='linkedin'
                    onClick={upload}
                    variant='solid'>
                    POST
                </Button>
            </div>
        </div>
    );
}

export default PostImage;
