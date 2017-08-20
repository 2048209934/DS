import React, { Component } from 'react';
import Wuyeindex from './Wuyeindex';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Wuye extends Component {
  render() {
    return (
       <Router>
    	  <div>
    	  	<Route exact path='/wuye' render={() => (
            <Link to="/wuye/index">登录</Link>
           )} />  
          <Route path="/wuye/index" component={Wuyeindex} />
        </div>
    	 </Router>  

    );
  }
}

export default Wuye;