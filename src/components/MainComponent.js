import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
import Home from './HomeComponent';
import Header  from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {    
    return (
      <div>
        <Header />
          <Switch>
            <Route exact path='/home' component={() => <Home />} />
            <Route exact path='/aboutus' component={() => <About />} />
            <Route exact path='/contactus' component={() => <Contact />} />
            <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;