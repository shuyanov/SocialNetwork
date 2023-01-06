import Post from './NewPost/Post';
import postsContent from './Posts.module.css'

const PostsNews = () => {
  return (
    <div className={postsContent.content}>
      <div className={postsContent.item}>
        Test PostsNews
      </div>
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default PostsNews;