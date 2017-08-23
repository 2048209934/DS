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

export default Yezhumake;