import friendContent from './ShowFriends.module.css'

const FriendElement = () => 
{
    return (
        <div className={friendContent.item}>
            <img src="https://desu.shikimori.one/system/characters/original/155978.jpg?1639777821" />
            <div > name </div>
        </div>
    )
}

export default FriendElement;