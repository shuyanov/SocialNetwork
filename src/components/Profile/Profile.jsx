import profileClass from './Profile.module.css'

const Profile = () => {
  return (
    <div className={profileClass.content}>
      <div>
        <img src='https://gamemag.ru/images/cache/News/News167810/7ed34006a1-2_1390x600.jpg' />
      </div>
      <div className={profileClass.item}>
        Test Profile
      </div>
      <div className={profileClass.post}>
        Post1
      </div>
      <div className={profileClass.post}>
        Post2
      </div>
      <div className={profileClass.content}>
        <img src='https://i.pinimg.com/564x/a2/ba/ce/a2bacee80dab269f61447fd1405a4cba.jpg' />
      </div>
    </div>
  )
}

export default Profile;