import PostsNews from './Posts/Posts';
import sd from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div className={sd.post}>
        <img src='https://gamemag.ru/images/cache/News/News167810/7ed34006a1-2_1390x600.jpg' />
      </div>
      <PostsNews />
    </div>
  )
}

export default Profile;