import Post from './NewPost/Post';
import postsContent from './Posts.module.css'
import React from 'react';
import { type } from '@testing-library/user-event/dist/type';

const PostsNews = (props) => {

  let postElements = props.postData.map(p => <Post write={p.write} LikeCounts={p.Like} />)
  let newPostElement = React.createRef();

  let addpost = () => {
    props.dispatch({type: "ADD-POST"});
  }
  
  let newUpdatePosts = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: 'NEW-UPDATE-POST-TEXT', newText: text});
  }

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
        <button onClick={addpost}>Добавить запись</button>
      </div>
      {postElements}
    </div>
  )
}

export default PostsNews;