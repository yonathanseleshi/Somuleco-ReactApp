import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import AuthenticatedSideNav from './Authenticated/AuthenticatedSideNav/AuthenticatedSideNav'

export default props => (
  <div>
    <NavMenu />
    <AuthenticatedSideNav/>
    <Container>
      {props.children}
    </Container>
  </div>
);
