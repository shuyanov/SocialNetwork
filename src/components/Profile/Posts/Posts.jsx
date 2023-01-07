import Post from './NewPost/Post';
import postsContent from './Posts.module.css' 

const PostsNews = () => {
  return (
    <div className={postsContent.content}>
      <Post write= "it's my first post" LikeCounts = '15'/>
      <Post write= "HI ;) it's my second post" LikeCounts = '20'/>
    </div>
  )
}

export default PostsNews;