import Post from './NewPost/Post';
import postsContent from './Posts.module.css'
import React from 'react';
import { addPostActionCreate, newUpdatePostActionCreate } from '../../../redux/reducer-post';


const PostsNews = (props) => {

  let postElements = props.postData.map(p => <Post write={p.write} LikeCounts={p.Like} />)
  let newPostElement = React.createRef();

  let addPost = () => {
    debugger
    props.dispatch(addPostActionCreate());
  }
  
  let newUpdatePosts = () => {
    
    let text = newPostElement.current.value;
    let action = newUpdatePostActionCreate(text);
    props.dispatch(action)
    };

  return (
    <div className={postsContent.content}>
      <div>
        <textarea
          onChange={newUpdatePosts}
          ref={newPostElement}
          value = {props.RenderPosts}
          >
        </textarea>
      </div>
      <div>
        <button onClick={addPost}>Добавить запись</button>
      </div>
      {postElements}
    </div>
  )
}

export default PostsNews;