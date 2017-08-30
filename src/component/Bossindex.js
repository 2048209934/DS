import React, { Component } from 'react';
import './../css/bossindex.css';

import Bosszhuzhe from './Bosszhuzhe';
import Bosssteward from './Bosssteward';
import Bossshequ from './Bossshequ';
import Bossme from './Bossme';

import $ from 'jquery';
import OldMenuLink from './Navs';

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
	         <div className="boss_con">
                <OldMenuLink to={'/boss/index'} activeOnlyWhenExact={true} label={'住这儿'} img1={'../images/account_eight.png'} img2={'../images/account_server.png'}></OldMenuLink>
                <OldMenuLink to={'/boss/index/steward'} label={'管家'} img1={'../images/account_five.png'} img2={'../images/account_six.png'}></OldMenuLink>
                <OldMenuLink to={'/boss/index/shequ'} label={'社区'} img1={'../images/account_four.png'} img2={'../images/account_three.png'}></OldMenuLink>
            </div>
    	  	{/*<Link to="/boss/index">住这儿</Link>
    	  	<Link to="/boss/index/steward">管家</Link>
    	  	<Link to="/boss/index/shequ">社区</Link>
    	  	<Link to="/boss/index/me">我</Link>
        */}
        </div>
    	 </Router>   
    );
  }
}


export default Bossindex;