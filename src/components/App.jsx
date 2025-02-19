import "./App.css";
import Profile from "./Profile.jsx";
import { userData } from "../userData.json";
import { friends } from "../friends.json";
import { transactions } from "../transactions.json";
import TransactionHistory from "./TransactionHistory.jsx";
import FriendList from "./FriendList.jsx";

export default function App() {
  return (
    <>
      <Profile person={userData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}
