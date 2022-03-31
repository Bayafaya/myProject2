import React from "react";
import PostItem from "./PostItem";
import {TransitionGroup,CSSTransition} from 'react-transition-group';

const PostList = ({sheets, title, remove}) =>{
  if(!sheets.length){
    return(
      <h1 style={{textAlign:'center'}}>
        null !
        </h1>
    )
  }
    return(
        <div>
        <h1 style={{textAlign:'center'}}>{title}</h1>
        <TransitionGroup>
      
          {sheets.map((post, index) =>
              <CSSTransition
              key = {index}
              timeout={500}
              classNames="post"
            >
           <PostItem remove={remove} number={index +1} post={post} />
           </CSSTransition>
           )
           }
         
        </TransitionGroup>
        
      </div>
    )
}
export default PostList;