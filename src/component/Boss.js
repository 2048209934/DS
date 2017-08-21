import React, { Component } from 'react';
import Bossindex from './Bossindex';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Boss extends Component {
  render() {
    return (
    	 <Router>
    	  <div>
    	  	<Route exact path='/boss' render={() => (
    	  		<Link to="/boss/index">登录</Link>
           )} />  
          <Route path="/boss/index" component={Bossindex} />
        </div>
    	 </Router>      
    );
  }
}

export default Boss;