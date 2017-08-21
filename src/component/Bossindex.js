import React, { Component } from 'react';
import './../css/bossindex.css';
import Bosszhuzhe from './Bosszhuzhe';
import Bosssteward from './Bosssteward';
import Bossshequ from './Bossshequ';
import Bossme from './Bossme';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Bossindex extends Component {
  render() {
    return (
    	<Router>
    	  <div>
    	  	<Route path="/boss/index" exact component={Bosszhuzhe} />
    	  	<Route path="/boss/index/steward" component={Bosssteward} />
    	  	<Route path="/boss/index/shequ" component={Bossshequ} />
    	  	<Route path="/boss/index/me" component={Bossme} />
	        <h2 id="a">111</h2>
    	  	<Link to="/boss/index">住这儿</Link>
    	  	<Link to="/boss/index/steward">管家</Link>
    	  	<Link to="/boss/index/shequ">社区</Link>
    	  	<Link to="/boss/index/me">我</Link>
        </div>
    	 </Router>   
    );
  }
}

export default Bossindex;