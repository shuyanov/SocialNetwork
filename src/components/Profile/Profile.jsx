import PostsNews from './Posts/Posts';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <PostsNews
        RenderPosts = {props.profilePage.newUpdatePosts}
        postData={props.profilePage.postData}
        dispatch={props.dispatch} />
    </div>
  )
}

export default Profile;