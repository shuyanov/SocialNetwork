import MyPostsContainer from './Posts/PostsConteiner';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profilePhoto = {props.profilePhoto}/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;