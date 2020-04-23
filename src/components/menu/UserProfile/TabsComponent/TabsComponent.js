import React from 'react';
import styles from './TabsComponent.module.scss';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBell, faCog} from '@fortawesome/free-solid-svg-icons'

const TabsComponent = () => {

  const dataObject = {
    userInformation: [
      {
        column: 'Description', value: ' Many people think that Lorem Ipsum is a ' +
          'pseudo-Latin set of words taken from the ceiling, but this is not entirely true. ' +
          'Its roots go back to one fragment of classical latin 45 years BC, that' +
          'is, more than two millennia ago.'
      },
      {column: 'Current City', value: 'Vema, Goa'},
      {column: 'Hometown', value: 'Mumbai, Maharashtra'},
      {column: 'Email address', value: 'karlxavier@gmail.com'},
      {column: 'Language', value: 'English, Hindi, Marathi'},
    ]
  };

  return (
    <>
      <Tabs className={styles.TabsWrapper}>
        <TabList>
          <div>
            <Tab>About me</Tab>
            <Tab>Additional info</Tab>
            <Tab>Credits</Tab>
            <div className={styles.IconsWrapper}>
              <span className={styles.Bell}><FontAwesomeIcon icon={faBell}/></span>
              <span className={styles.Cog}><FontAwesomeIcon icon={faCog}/></span>
            </div>
          </div>
        </TabList>
        <TabPanel className={styles.TabPanel}>
          <h4>Karl Xavier</h4>
          {dataObject.userInformation.map(item => {
            return (
              <div className={'container'} key={item.column}>
                <div className={`${styles.TabsItemRow} ` + 'row'}>
                  <div className={`${styles.TabsItemCol} ` + 'col-lg-3 col-md-3 col-sm-12'}>
                    {item.column}:
                  </div>
                  <div className={'col-lg-9 col-md-9 col-sm-12'}>
                    {item.value}
                  </div>
                </div>
              </div>
            );
          })}
        </TabPanel>
        <TabPanel className={styles.TabPanel}>
          <h4>Additional info</h4>
        </TabPanel>
        <TabPanel className={styles.TabPanel}>
          <h4>Credits</h4>
        </TabPanel>
      </Tabs>
    </>
  )
};

export default TabsComponent;
