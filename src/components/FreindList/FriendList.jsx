import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {/* Кількість li залежить від кількості об'єктів в масиві */}
      {friends.map((friend) => {
        return (
          <li className={css.item} key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        );
      })}
    </ul>
  );
}
