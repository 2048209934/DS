import React, { Component } from 'react';
import './../css/wuye_guarantee.css';
import wuyealready from './wuye_already';
import $ from 'jquery'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import * as action from './../action/action'
import {connect} from 'react-redux';
class WuyeGuarantee extends Component {
  componentDidMount(){
    $(".admin_con").hide()
  }
  componentWillUnmount(){
    $(".admin_con").show()
  }
  tip=function(){
    window.history.go(-1)
  }
  deal(){
    var bb=JSON.parse(window.sessionStorage.getItem("wuye"))
    console.log(  this.props.yezhu_antee(bb[0].village,bb[0].name,bb[0].user))
   
  }
  render() {
    return (
      <Router>
    	  <div className="guarantee">
            <div className="go_back">
                    <span>保修服务</span>
                </div>
    	  	  <div className="guarantee_top">
                <p><Link to="/wuye/index/guarantee">未处理</Link></p>
                <p><Link to="/wuye/index/already">已处理</Link></p>
            </div>
            <Route path="/wuye/index/guarantee" render={()=>(
                <div className="guarantee_bottom">
                    <ul className="repari">
                    
                        <li>
                            <div className="repari_top">
                                <p>{console.log(this.props.data)}</p>
                            </div>
                            <div className="repari_bottom">
                                <div className="book">
                                    <p className="porto"></p>
                                    <div className="porto_con">
                                        <p>大圣</p>
                                        <p>大圣花园小区</p>
                                    </div>
                                </div>
                                <div className="tener" onClick={this.deal.bind(this)}>标记为处理</div>
                            </div>
                        </li>
                       
                    </ul>
                     <div className="tip" onClick={this.tip}>
                        <p><img src="../../images/tip.png" alt=""/></p>
                    </div>
                </div>
              )} />
            <Route path="/wuye/index/already" component={wuyealready} />
            
        </div>
      </Router>
    );
  }
}
export default connect(e=>({data:e.wuyeantee}),action)(WuyeGuarantee);