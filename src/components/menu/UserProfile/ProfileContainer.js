import React, {Component} from 'react';
import styles from './ProfileContainer.module.scss';
import {Button} from './Button/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faCaretDown} from '@fortawesome/free-solid-svg-icons'
import 'react-tabs/style/react-tabs.css';
import TabsComponent from "./TabsComponent/TabsComponent";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";

class ProfileContainer extends Component {
  state = {
    isDefaultPhotoDisplayed: true,
    isPhotoLoaded: false,
    photo: '',
  };

  changeProfilePhotoHandler = () => {
    const stateCopy = {...this.state};
    this.setState({
      isDisplayed: !this.state.isDisplayed,
      stateCopy,
    });
  };

  loadPhoto = event => {
    const fileReader = new FileReader();
    const photo = event.target.files[0];
    fileReader.readAsDataURL(photo);
    fileReader.addEventListener('load', () => {
      this.setState({
        ...this.state,
        isDefaultPhotoDisplayed: false,
        isDisplayed: !this.state.isDisplayed,
        isPhotoLoaded: !this.state.isPhotoLoaded,
        photo: fileReader.result,
      });
    });
  };

  render() {

    return (
      <div className={`${styles.UserProfile} ` + 'container'}>

        <div className={`${styles.ProfileCard} ` + 'card'}>
          <div className={'row'}>
            <div className={'col col-lg-5 col-md-5 col-sm-12'}>

              <ProfilePhoto
                isDefaultPhotoDisplayed={this.state.isDefaultPhotoDisplayed}
                imgSrc={this.state.photo}
                changeProfilePhotoHandler={this.changeProfilePhotoHandler}
                loadPhoto={this.loadPhoto}
              />

              <div>
                <Button name='Connect'/>
                <Button name='Message' iconLeft={<FontAwesomeIcon icon={faEnvelope}/>}/>
                <Button name='Review' iconRight={<FontAwesomeIcon icon={faCaretDown}/>}/>
              </div>

            </div>

            <div className={`${styles.ProfileCol} ` + 'col col-lg-7 col-md-7 col-sm-12'}>
              <TabsComponent/>
            </div>
          </div>
        </div>

        <div className={`${styles.FollowersContainer} ` + 'container'}>
          <div className={`${styles.CardBody} ` + "card"}>
            <div className={`${styles.RowContainer} ` + 'row'}>
              <div className={'col col-lg-4 col-md-4 col-sm-12'}>
                <div className={`${styles.FollowersCard} ` + 'card'}>
                  <div className={`${styles.FollowersRow} ` + 'row'}>
                    <div className={`${styles.Followers} ` + 'col'}>
                      <h3>203</h3>
                      <p>Followers</p>
                    </div>
                    <div className={`${styles.Followers} ` + 'col'}>
                      <h3>5</h3>
                      <p>Active chats</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileContainer;
