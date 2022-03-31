import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../APi/PostService";
import { useFetching } from "../Hooks/useFetching";

const PostIdPage = () =>{
    let params = useParams();
    const [post,setPost] = useState({}); 
    const [comments,setComments] = useState([]);
    console.log(params)
    useEffect(()=>{
        fetchingById(params.id)
        fetchingComment(params.id)
    },[])
    const [fetchingById, isLoading,error] = useFetching(async(id)=>{
        const response = await PostService.getById(params.id);
        setPost(response.data)
    })
    const [fetchingComment, isComLoading,comError] = useFetching(async(id)=>{
        const response = await PostService.getComments(params.id);
        setComments(response.data)
    })
   
    return(
            <div>
                <h1 style={{ textAlign: 'center',marginBottom:15 }}>you opened post with id: {params.id}</h1>
                {isLoading
                ? <h1 style={{ textAlign: 'center' }}>Loading ...</h1>
                 :<div style={{ textAlign: 'center' ,marginBottom:30 }}>{post.id}. {post.title} </div>
                }
                <hr />
                <h1 style={{ textAlign: 'center' ,marginBottom:30 }}>Comments</h1>
                {isComLoading
                ? <h1 style={{ textAlign: 'center' }}>Loading ...</h1>
                 :<div>
                     {comments.map(comm => <div style={{marginTop:30}}>
                         <h5>{comm.email}</h5>
                         <div>{comm.body}</div>
                     </div>
                     )}
                 </div>
                }
            </div>
    )
}
export default PostIdPage;