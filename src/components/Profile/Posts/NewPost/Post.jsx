import NewPost from './Post.module.css'

const Post = (props) => {

  return (
    <div className={NewPost.item}>
      <img src='https://upload.wikimedia.org/wikipedia/ru/thumb/b/bc/Garfield_the_Cat.svg/1200px-Garfield_the_Cat.svg.png' />
      {props.write}
      <div>
        <span>like {props.LikeCounts}</span>
      </div>
    </div>
  )
}

export default Post;