import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.cardWrapper}>
      <div className={css.cardInfo}>
        <img src={image} alt={name} className={css.cardImage} />
        <p className={css.cardName}>{name}</p>
        <p className={css.cardTag}>@{tag}</p>
        <p className={css.cardLocation}>{location}</p>
      </div>

      <ul className={css.cardStats}>
        <li className={css.cardStatItem}>
          <span className={css.csrdStatTitle}>Followers</span>
          <span className={css.csrdStatValue}>{followers}</span>
        </li>
        <li className={css.cardStatItem}>
          <span className={css.csrdStatTitle}>Views</span>
          <span className={css.csrdStatValue}>{views}</span>
        </li>
        <li className={css.cardStatItem}>
          <span className={css.csrdStatTitle}>Likes</span>
          <span className={css.csrdStatValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
