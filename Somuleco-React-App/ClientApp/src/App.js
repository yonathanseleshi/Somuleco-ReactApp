import React from 'react';
import { Route, Switch } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import Register from "./components/Unauthenticated/Registration/Register";
import Login from "./components/Unauthenticated/Login/Login";
import UserProfile from "./components/Profile/UserProfile";
import Lessons from "./components/Authenticated/Lessons"
import Registration from "./pages/unauthenticated/Registration"




export default () => (
  <Layout>
      <Switch>
    <Route exact path="/" component={Home} />
      
    <Route path="/register" exact component={Register} />
    <Route path="/lessons" exact component={Lessons}/>
    <Route path="/login" exact component={Login} />
    <Route path="/register" exact component={Registration}/>
    <Route path="/:username" component={UserProfile} />
      </Switch>

    
  </Layout>
);
