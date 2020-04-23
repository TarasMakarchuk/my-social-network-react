import React from 'react';
import { Route, Switch } from 'react-router-dom';
import s from './app.module.scss';
import { About, Create, Home, Login, Signup } from '../../pages';
import Header from '../header';
import ProfileContainer from "../menu/UserProfile/ProfileContainer";

const App = () => {
  return (
    <div className={s.main}>
      <Header />
      <div className={s.container}>
        <Switch>
          <Route path="/about/" component={About} exact />
          <Route path="/create/" component={Create} exact />
          <Route path="/home/" component={Home} exact />
          <Route path="/login/" component={Login} exact />
          <Route path="/signup/" component={Signup} exact />
          <Route path="/profile/" component={ProfileContainer} exact />
        </Switch>
      </div>
    </div>
  );
};

export default App;
