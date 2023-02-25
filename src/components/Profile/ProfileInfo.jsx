import Preloader from '../common/Preloder/Preloader';
import UserContacts from '../common/Preloder/UserContacts';
import BriefoInformation from './Posts/BriefoInformation/BriefoInformation';
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
            <BriefoInformation status = {props.status} updateStatus = {props.updateStatus} />
        </div>

        <div className={sd.postWindow}>
            <img src={props.profilePhoto.photos.large} />
            <div>
                <UserContacts userContacts = {props.userContacts}/>
            </div>
        </div>
    </div>
}
export default ProfileInfo; 