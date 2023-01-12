import FriendElement from './FrendcComponent/ShowFriends';
import friendsContent from './StyleFriend.module.css'

const FriendsIcons = () => {
    return (
        <div className={friendsContent.friendswrapper}>
            <div className={friendsContent.friendsElements}>
                <div className={friendsContent.item}>
                    <div className={friendsContent.size}>
                        FRIENDS
                    </div>
                    <div className={friendsContent.friendswrapper}>
                        <FriendElement></FriendElement>
                        <FriendElement></FriendElement>
                        <FriendElement></FriendElement>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendsIcons;