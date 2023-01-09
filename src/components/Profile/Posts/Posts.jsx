import Post from './NewPost/Post';
import postsContent from './Posts.module.css' 

const PostsNews = () => {

  let postData = [
    {id: 1, write: "it's my first post", Like: 15},
    {id: 2, write: "HI ;) it's my second post", Like: 18},
    {id: 3, write: "it's my cat", Like: 182}
  ]

  let postElements = postData.map( p => <Post write= {p.write} LikeCounts = {p.Like} />)

  return (
    <div className={postsContent.content}>
      {postElements}
    </div>
  )
}

export default PostsNews;