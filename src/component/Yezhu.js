import React, { Component } from 'react';
import Yezhuindex from './Yezhuindex';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Yezhu extends Component {
  render() {
    return (
       <Router>
    	  <div>
    	  	<Route exact path='/yezhu' render={() => (
            <Link to="/yezhu/index">登录</Link>
           )} />  
          <Route path="/yezhu/index" component={Yezhuindex} />
        </div>
    	 </Router> 
    );
  }
}

export default Yezhu;