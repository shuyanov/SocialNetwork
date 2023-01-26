import Post from './NewPost/Post';
import postsContent from './Posts.module.css'
import React from 'react';

const PostsNews = (props) => {
  let state = props.PostsElements;
  let postElements = state.map(p => <Post write={p.write} LikeCounts={p.Like} />)
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }
  let newUpdatePosts = () => {
    let text = newPostElement.current.value;
    props.newUpdatePostText(text);
  };

  return (
    <div className={postsContent.content}>
      <div>
        <textarea
          onChange={newUpdatePosts}
          ref={newPostElement}
          value={props.newUpdatePostsText}
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