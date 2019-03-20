import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import Register from "./components/Unauthenticated/Registration/Register";
import Login from "./components/Unauthenticated/Login/Login";
import UserProfile from "./components/Profile/UserProfile";


export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/register' exact component={Register} />
    <Route path='/login' exact component={Login} />
    <Route path='/:username' component={UserProfile} />
  </Layout>
);
