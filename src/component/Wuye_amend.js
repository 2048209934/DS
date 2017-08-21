import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Wuyeamend extends Component {
  render() {
    return (
    	  	<div className="revise">
            <div className="self_means">
                <div>
                    <span>返回</span>
                    <span>个人资料</span>
                </div>
            </div>
            <ul className="self_data">
                <li>
                  <input type="text" defaultValue="昵称" placeholder="昵称"/>
                </li>
                <li>
                  <input type="radio" value="男" name="sex"/>男
                  <input type="radio" value="女" name="sex"/>女
                </li>
                <li>
                  <input type="text" defaultValue="手机号" placeholder="手机号"/>
                </li>
                <li>
                  <input type="text" defaultValue="邮箱" placeholder="邮箱"/>
                </li>
                <li>
                  <input type="text" defaultValue="密码"  placeholder="密码"/>
                </li>
            </ul>
            <div className="btn">提交</div>
        </div>
    );
  }
}

export default Wuyeamend;