import FriendElement from './FrendcComponent/ShowFriends';
import friendsContent from './StyleFriend.module.css'

const FriendsIcons = (props) => {
    return (
        <div className={friendsContent.friendswrapper}>
            <div className={friendsContent.friendsElements}>
                <div className={friendsContent.item}>
                    <div className={friendsContent.size}>
                        FRIENDS
                    </div>
                    <div className={friendsContent.friendswrapper}>
                        <FriendElement name = {props.nameState[0].user} ></FriendElement>
                        <FriendElement name = {props.nameState[1].user}></FriendElement>
                        <FriendElement name = {props.nameState[2].user}></FriendElement>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendsIcons;