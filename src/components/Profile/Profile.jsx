import React from "react";
import ProfileCss from "./Profile.module.css";
const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={ProfileCss.Profile}>
      <div className={ProfileCss.Profile__info}>
        <img className={ProfileCss.Profile__image} src={image} alt={name} />
        <p className={ProfileCss.Profile__title}>{name}</p>
        <p className={ProfileCss.Profile__subTitle}>@{tag}</p>
        <p className={ProfileCss.Profile__subTitle}>{location}</p>
      </div>

      <ul className={ProfileCss.Profile__stats}>
        <li className={ProfileCss.Profile__statsItem}>
          <span className={ProfileCss.Profile__statsItem_statKey}>
            Followers
          </span>
          <span className={ProfileCss.Profile__statsItem_statValue}>
            {followers}
          </span>
        </li>
        <li className={ProfileCss.Profile__statsItem}>
          <span className={ProfileCss.Profile__statsItem_statKey}>Views</span>

          <span className={ProfileCss.Profile__statsItem_statValue}>
            {views}
          </span>
        </li>
        <li className={ProfileCss.Profile__statsItem}>
          <span className={ProfileCss.Profile__statsItem_statKey}>Likes</span>
          <span className={ProfileCss.Profile__statsItem_statValue}>
            {likes}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
