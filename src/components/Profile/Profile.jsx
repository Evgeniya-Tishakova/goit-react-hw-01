import css from "./Profile.module.css";

export default function Profile({
  person: { name, tag, location, image, stats },
}) {
  return (
    <div className={css.container}>
      <div>
        <img src={image} alt={name} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.info}>Followers</span>
          <span className={css.counter}>{stats.followers}</span>
        </li>

        <li className={css.item}>
          <span className={css.info}>Views</span>
          <span className={css.counter}>{stats.views}</span>
        </li>

        <li className={css.item}>
          <span className={css.info}>Likes</span>
          <span className={css.counter}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
