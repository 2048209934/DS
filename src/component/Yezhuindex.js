import React, { Component } from 'react';
import './../css/yezhuindex.css';
import Yezhuzhuzhe from './Yezhuzhuzhe';
import Yezhusteward from './Yezhusteward';
import Yezhushequ from './Yezhushequ';
import Yezhume from './Yezhume';
import  YezhuAccept from './Yezhu_accept';
import  YezhuPackage from './Yezhu_package';
import  YezhuShare from './Yezhu_share';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Yezhuindex extends Component {
  render() {
    return (
      <Router>
  		  <div>
              <Route path="/yezhu/index" exact component={Yezhuzhuzhe} />
              <Route path="/yezhu/index/steward" component={Yezhusteward} />
              <Route path="/yezhu/index/shequ" component={Yezhushequ} />
              <Route path="/yezhu/index/me" component={Yezhume} />
              <Route path="/yezhu/index/accept" component={YezhuAccept}/>
              <Route path="/yezhu/index/package" component={YezhuPackage}/>
              <Route path="/yezhu/index/share" component={YezhuShare}/>
    
              <div className="admin_con">
                  <Link to="/yezhu/index">住这儿</Link>
                  <Link to="/yezhu/index/steward">管家</Link>
                  <Link to="/yezhu/index/shequ">社区</Link>
                  <Link to="/yezhu/index/me">我</Link>
              </div>
          </div>    
      </Router>
    );
  }
}

export default Yezhuindex;