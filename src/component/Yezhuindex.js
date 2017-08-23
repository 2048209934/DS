import React, { Component } from 'react';
import './../css/yezhuindex.css';
import Yezhuzhuzhe from './Yezhuzhuzhe';
import Yezhusteward from './Yezhusteward';
import Yezhushequ from './Yezhushequ';
import Yezhume from './Yezhume';
import  YezhuAccept from './Yezhu_accept';
import  YezhuPackage from './Yezhu_package';
import  YezhuShare from './Yezhu_share';

import $ from 'jquery'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import * as action from './../action/action'
import {connect} from 'react-redux';


class Yezhuindex extends Component {
	componentDidMount(){
		setTimeout(()=>{
//			console.log(this.props.data)
//			var yezhustr=JSON.stringify(this.props.data)
//			console.log(yezhustr)
			var yezhudata=this.props.data
			if(yezhudata==0){
				$(".wrap").parent().parent().html('<div style="margin:64% 0 0 0;text-align: center;font-size: 20px;">对不起，您输入的内容错误</div>')	
			}
		},1)
	}
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

export default connect(e=>({data:e.yezhudata}),action)(Yezhuindex);