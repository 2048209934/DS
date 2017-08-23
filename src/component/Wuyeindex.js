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

import $ from 'jquery'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import * as action from './../action/action'
import {connect} from 'react-redux';


class Wuyeindex extends Component {
	componentDidMount(){
		setTimeout(()=>{
//			console.log(this.props.data)
			var wuyedata=this.props.data
			if(wuyedata==0){
				$(".Admin").html('<div style="margin:64% 0 0 0;text-align: center;font-size: 20px;">对不起，您输入的内容错误</div>')	
			}
		},1)
	}
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
                 <Link to="/wuye/index">
                    <p className="admin_one" id="admin_one"><i className="fa fa-facebook"></i></p>
                    <p className="admin_word" id="admin_word">住这儿</p>
                </Link>
                <Link to="/wuye/index/steward">
                    
                    <p>管家</p>
                </Link>
                <Link to="/wuye/index/shequ">
                    
                    <p>社区</p>
                </Link>
                <Link to="/wuye/index/me">
                    
                    <p>我</p>
                </Link>
            </div>
        </div> 
      </Router>    
    );
  }
}

export default connect(e=>({data:e.wuyedata}),action)(Wuyeindex);