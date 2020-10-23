/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from 'react-router-dom';

import Course1 from './Course1';
import Course2 from './Course2';
import Course3 from './Course3';
import NotFoundPage from './NotFoundPage';
import PropTypes from 'prop-types';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
 
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <img
            alt=""
            src={require("../logo.svg")}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          CSC540 Final Project - Namratha
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <NavLink to="/course-1">CSC540</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/course-2">CSC630</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/course-3">CSC633</NavLink>
          </Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Course1} />
        <Route exact path="/course-1" component={Course1} />
        <Route path="/course-2" component={Course2} />
        <Route path="/course-3" component={Course3} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.element,
};

export default hot(module)(App);
