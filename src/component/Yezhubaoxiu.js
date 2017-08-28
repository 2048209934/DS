import React, { Component } from 'react';
import './../css/yezhubaoxiu.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Yezhubaoxiu extends Component {
  render() {
    return (
    	  <div>
           <div className="deal_top">
              <div className='del_top'>
                  <p></p>
                  <p>报事报修</p>
                  <p></p>
              </div>
              <div className="deal_con">
                  <input type="text" defaultValue="业主信息"/><br/>
                  <input type="text" defaultValue="业主电话"/><br/>
                  <input type="text" defaultValue="业主地址"/>
                  <div className="yz_bx">快捷保修</div>
                  <div className="choose_box">漏电  <input type="checkbox" className="choose"/></div>
                  <div className="choose_box">漏水  <input type="checkbox" className="choose"/></div>
                  <div className="choose_box">煤气  <input type="checkbox" className="choose"/></div>
              </div>
           </div>
        </div>
    );
  }
}

export default Yezhubaoxiu;