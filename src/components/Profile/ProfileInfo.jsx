import Preloader from '../common/Preloder/Preloader';
import sd from './Profile.module.css';

const ProfileInfo = (props) => {

    if (!props.profilePhoto) {
        return (
            <div>
                <Preloader />
            </div>
        )
    }
    return <div>
        <div className={sd.post}>
            <img src='https://gamemag.ru/images/cache/News/News167810/7ed34006a1-2_1390x600.jpg' />
        </div>
        <div>
            <img src={props.profilePhoto.photos.large} />
        </div>
    </div>
}

export default ProfileInfo; 