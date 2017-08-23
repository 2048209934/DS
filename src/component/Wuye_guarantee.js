import React, { Component } from 'react';
import './../css/wuye_guarantee.css';
import wuyealready from './wuye_already'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class WuyeGuarantee extends Component {
  tip=function(){
    window.history.go(-1)
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
                                <p>感应灯坏了，一直都不亮，请师傅尽快安排维修，要不然没办法走路。</p>
                            </div>
                            <div className="repari_bottom">
                                <div className="book">
                                    <p className="porto"></p>
                                    <div className="porto_con">
                                        <p>大圣</p>
                                        <p>大圣花园小区</p>
                                    </div>
                                </div>
                                <div className="tener">标记为处理</div>
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

export default WuyeGuarantee;