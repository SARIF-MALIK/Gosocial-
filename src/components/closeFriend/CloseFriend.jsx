import './closeFriend.css'


const CloseFriend = ({friend}) => {
  return (
    <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={friend.profilePicture} alt="" />
            <span className='sidebarFriendName'>{friend.username}</span>
    </li>
  )
}

export default CloseFriend