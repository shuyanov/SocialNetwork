import MyPostsContainer from './Posts/PostsConteiner';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        profilePhoto={props.profilePhoto}
        userContacts={props.userContacts}
        updateStatus={props.updateStatus}
        status={props.status}
      />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;