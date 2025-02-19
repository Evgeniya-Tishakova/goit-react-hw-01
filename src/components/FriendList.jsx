import FriendListItem from "./FriendListItem.jsx";

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {/* Кількість li залежить від кількості об'єктів в масиві */}
      {friends.map((friend) => {
        return (
          <li className="friend-item" key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        );
      })}
    </ul>
  );
}
