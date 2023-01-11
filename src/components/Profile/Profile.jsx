import PostsNews from './Posts/Posts';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <PostsNews postData = {props.postData}/>
    </div>
  )
}

export default Profile;