import "./Profile.css";

export default function Profile({
  person: { name, tag, location, image, stats },
}) {
  return (
    <div className="profile-container">
      <div>
        <img className="profile-img" src={image} alt={name} />
        <p className="profile-name">{name}</p>
        <p className="profile-tag">@{tag}</p>
        <p className="profile-location">{location}</p>
      </div>

      <ul className="profile-list">
        <li className="profile-item">
          <span className="profile-info">Followers</span>
          <span className="profile-counter">{stats.followers}</span>
        </li>

        <li className="profile-item">
          <span className="profile-info">Views</span>
          <span className="profile-counter">{stats.views}</span>
        </li>

        <li className="profile-item">
          <span className="profile-info">Likes</span>
          <span className="profile-counter">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
