import "./FriendList.css";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className="friend-container">
      <img src={avatar} alt="Avatar" width="48" />
      <p className="friend-name">{name}</p>
      {isOnline ? (
        <p className="friend-status online">Online</p>
      ) : (
        <p className="friend-status">Offline</p>
      )}
    </div>
  );
}
