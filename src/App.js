import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { SecureRoute, LoginCallback } from '@okta/okta-react';
import {
  CssBaseline,
  withStyles,
} from '@material-ui/core';

import Header from './components/Header';
import Home from './pages/Home';
import PostManager from './pages/PostManager.js';

const styles = theme => ({
  main: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
});

const App = ({ classes }) => (
  <Fragment>
    <CssBaseline />
    <Header />
    <main className={ classes.main }>
      <Route exact path='/' component={ Home } />
      <SecureRoute path='/posts' component={PostManager} />
      <Route exact path='/login/callback' component={ LoginCallback } />
    </main>
  </Fragment>
);

export default withStyles(styles)(App);
