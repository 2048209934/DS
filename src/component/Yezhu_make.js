import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class Yezhumake extends Component {
  back=function(){
    window.history.go(-1)
  }
  
  render() {
    return (
    	  <div>
            {/*header*/}
            <p className="head" id="head">
                <img onClick={this.back} src="../../../../images/arrow.png" alt="" />
                <span>编辑资料</span>
            </p>
            <div className="modify">
                <input type="text" placeholder="昵称" id="yzname"/>
                <input  type="text" placeholder="手机号" id="yzphone"/>
                <input  type="text" placeholder="邮箱" id="yemail"/>
                <input  type="radio" value="男" name="sex"/>男
                <input  type="radio" value="女" name="sex"/>女
            </div>
            <div className="submit">提交</div>
        </div>
    );
  }
}

export default Yezhumake;