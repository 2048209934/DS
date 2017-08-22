import React, { Component } from 'react';
import './../css/wuyeindex.css'
import Wuyezhuzhe from './Wuyezhuzhe'
import Wuyesteward from './Wuyesteward'
import Wuyeshequ from './Wuyeshequ'
import Wuyeme from './Wuyeme'
import  WuyeParcel from './Wuye_parcel';
import  WuyeGuarantee from './Wuye_guarantee';
import  WuyeNotice from './Wuye_notice';
import  WuyeOrganize from './Wuye_organize';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import * as action from './../action/action'
import {connect} from 'react-redux';


class Wuyeindex extends Component {
  render() {
    return (
      <Router>
		    <div className="Admin">
            <Route path="/wuye/index" exact component={Wuyezhuzhe} />
            <Route path="/wuye/index/steward" component={Wuyesteward} />
            <Route path="/wuye/index/shequ" component={Wuyeshequ} />
            <Route path="/wuye/index/me" component={Wuyeme} />
            <Route path="/wuye/index/parcel" component={WuyeParcel}/>
            <Route path="/wuye/index/notice" component={WuyeNotice}/>
            <Route path="/wuye/index/organize" component={WuyeOrganize}/>
            <Route path="/wuye/index/guarantee" component={WuyeGuarantee}/>
            <div className="admin_con">
                <Link to="/wuye/index">住这儿</Link>
                <Link to="/wuye/index/steward">管家</Link>
                <Link to="/wuye/index/shequ">社区</Link>
                <Link to="/wuye/index/me">我</Link>
            </div>
        </div> 
      </Router>    
    );
  }
}

export default Wuyeindex;