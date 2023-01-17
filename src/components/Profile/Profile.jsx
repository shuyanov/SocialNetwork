import PostsNews from './Posts/Posts';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <PostsNews
        RenderPosts = {props.state.newUpdatePosts}
        postData={props.state.postData}
        dispatch={props.dispatch} />
    </div>
  )
}

export default Profile;