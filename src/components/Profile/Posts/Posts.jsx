import Post from './NewPost/Post';
import postsContent from './Posts.module.css' 

const PostsNews = () => {

  let postData = [
    {id: 1, write: "it's my first post", Like: 15},
    {id: 2, write: "HI ;) it's my second post", Like: 18},
    {id: 3, write: "it's my cat", Like: 182}
  ]

  return (
    <div className={postsContent.content}>
      <Post write= {postData[0].write} LikeCounts = {postData[0].Like} />
      <Post write= {postData[1].write} LikeCounts = {postData[1].Like} />
      <Post write= {postData[2].write} LikeCounts = {postData[2].Like} />
    </div>
  )
}

export default PostsNews;