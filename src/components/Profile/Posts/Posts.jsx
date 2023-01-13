import Post from './NewPost/Post';
import postsContent from './Posts.module.css'
import React from 'react';

const PostsNews = (props) => {
  let postElements = props.postData.map(p => <Post write={p.write} LikeCounts={p.Like} />)


  let newPostElement = React.createRef();

  let addpost = () => {
     let text = newPostElement.current.value;
     alert(text);
  }

  return (
    <div className={postsContent.content}>
      <div>
        <textarea ref={newPostElement} > </textarea>
      </div>
      <div>
        <button onClick={addpost}>Добавить запись</button>
      </div>
      {postElements}
    </div>
  )
}

export default PostsNews;