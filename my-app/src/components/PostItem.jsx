import React from "react";
import MyButton from "./ui/buttons/MyButton";
import {useNavigate} from 'react-router-dom'
const PostItem = (props) => {
    const navigate =  useNavigate();
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id} {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post__btn">
                <MyButton onClick = {()=> navigate(`/post/${props.post.id}`)}>open</MyButton>
                <MyButton onClick = {()=> props.remove(props.post)}>delete</MyButton>
            </div>
        </div>
    )
}
export default PostItem;