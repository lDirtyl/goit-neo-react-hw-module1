import clsx from "clsx";
import css from "./FriendList.module.css";

const FriendListItem = ({ friend }) => {
  const status = friend.isOnline ? "Online" : "Offline";

  return (
    <div className={css.listItem}>
      <img src={friend.avatar} alt={friend.name} width="80" />
      <p className={css.friendName}>{friend.name}</p>
      <p
        className={clsx(css.statusCheck, {
          [css.online]: friend.isOnline,
          [css.offline]: !friend.isOnline,
        })}
      >
        {status}
      </p>
    </div>
  );
};

export default FriendListItem;
