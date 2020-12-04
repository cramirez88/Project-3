import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import ReactDOM from 'react-dom';
import { Login } from './Login';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import Facebook from './components/Facebook';

//import Map from './components/Map';
//import axios from 'axios';
//import FacebookLogin from 'react-facebook-login';
//import { Jumbotron } from './components/Jumbotron';
class App extends Component {
  render() {
    return (
      // <React.Fragment>
          <Router>
          <NavigationBar />
          {/* <Map /> */}
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/login" component={Login} />
              <Layout>
              <Route exact path="/home" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NoMatch} />
              </Layout>
            </Switch>
        </Router>
      // </React.Fragment>
    );
  }
}

export default App;