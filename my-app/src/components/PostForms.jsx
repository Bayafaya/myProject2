import React, {useState} from "react";
import MyButton from "./ui/buttons/MyButton";
import MyInputs from "./ui/inputs/MyInputs";

const PostForms = ({create, removePosts}) =>{
    const [post, setPost] = useState({
        title:'',
        body:''
      });
      const addNewPost = (e) =>{
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now(),
        }
        create(newPost);
        setPost({title:'',body:''})
      }
    
    return(
        <form>
        <MyInputs type ='text' placeholder = 'title' value = {post.title} onChange = {e => setPost({...post, title: e.target.value})} />
        <MyInputs type ='text' placeholder = 'body'  value = {post.body} onChange = {e => setPost({...post, body: e.target.value})}/>
        <MyButton onClick = {addNewPost}>ADD NEW POST</MyButton>
        
        </form>
    )
}
export default PostForms;