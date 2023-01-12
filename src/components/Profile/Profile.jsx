import PostsNews from './Posts/Posts';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <PostsNews postData = {props.state.postData}/>
    </div>
  )
}

export default Profile;