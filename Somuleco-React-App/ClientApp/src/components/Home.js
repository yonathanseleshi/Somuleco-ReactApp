import React from 'react';
import { connect } from 'react-redux';

const Home = props => (
  <div>
    <h1>Somuleco Home</h1>
    <p>Welcome to your new single-page application, built with:</p>
  </div>
);

export default connect()(Home);
