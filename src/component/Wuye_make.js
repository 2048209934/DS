import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Wuyemake extends Component {
  back=function(){
    window.history.go(-1)
  }
  render() {
    return (
    	  <div>
            <div className="modify_top">
                <span onClick={this.back}><img src="../../../../images/tip.png" alt=""/></span>
                <span>编辑资料</span>
            </div>
            <div className="modify">
                <input type="text" defaultValue="昵称"/>
                <input  type="text" defaultValue="手机号"/>
                <input  type="text" defaultValue="邮箱"/>
                <input  type="radio" defaultValue="男" name="sex"/>男
                <input  type="radio" defaultValue="女" name="sex"/>女
            </div>
            <div className="submit">提交</div>
        </div>
    );
  }
}

export default Wuyemake;