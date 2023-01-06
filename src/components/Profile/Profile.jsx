import PostsNews from './Posts/Posts';
import profileClass from './Profile.module.css'

const Profile = () => {
  return (
    <div className={profileClass.content}>
      <div>
        <img src='https://gamemag.ru/images/cache/News/News167810/7ed34006a1-2_1390x600.jpg' />
        <PostsNews />
      </div>
    </div>
  )
}

export default Profile;