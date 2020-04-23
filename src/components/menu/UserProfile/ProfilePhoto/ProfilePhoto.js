import React from 'react';
import styles from "./ProfilePhoto.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCamera} from "@fortawesome/free-solid-svg-icons";
import defaultUserPhoto from "../../../../image/profile/default_user_profile.png";

const ProfilePhoto = props => {
  const userPhoto = props.isDefaultPhotoDisplayed ? (
    <img src={defaultUserPhoto} alt="profile image"className={styles.UserImg}/>
  ) : (
    <img
      src={props.imgSrc}
      className={styles.UserImg}
      alt="profile image"
    />
  );

  return (
    <div className={`${styles.ProfileBackgroundImages} ` + 'card'}>
      {userPhoto}
      <div className="text-center">
        <label
          className={styles.ChangePhoto}
          onClick={props.changeProfilePhotoHandler}
        >
          <FontAwesomeIcon icon={faCamera}/>
          <input
            type="file"
            name="AddImage"
            id="AddImage"
            accept="image/*"
            onChange={props.loadPhoto}
          />
        </label>
      </div>
    </div>
  )
};

export default ProfilePhoto;
