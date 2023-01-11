import Post from './NewPost/Post';
import postsContent from './Posts.module.css' 

const PostsNews = (props) => {
  
  let postElements = props.postData.map( p => <Post write= {p.write} LikeCounts = {p.Like} />)

  return (
    <div className={postsContent.content}>
      {postElements}
    </div>
  )
}

export default PostsNews;