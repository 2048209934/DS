import React, { Component } from 'react';
import './../css/wuye_notice.css';
import $ from 'jquery'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import * as action from './../action/action'
import {connect} from 'react-redux';

class WuyeNotice extends Component {
  componentDidMount(){
    $(".admin_con").hide()
  }
  componentWillUnmount(){
    $(".admin_con").show()
  }
  ok=function(){
    window.history.go(-1)
  }
  render() {
    return (
    	  <div className="notice">
    	  	  <div className="notice_editor">
                <span onClick={this.ok}><img src="../../images/tip.png" alt=""/></span>
                <span>{console.log(this.props.con)}</span>
            </div>
            <div className="editor_con">
                <div className="ed_con"  contentEditable="true"></div>
                <div className="issue">
                    <p><img src="../../images/comments.png" alt=""/></p>
                    <p>发布</p>
                </div>
                <div className="fixed">
                    <img src="../../images/book.png" alt=""/>
                </div>
            </div>
        </div>
    );
  }
}
export default connect(e=>({data:e.wuyenotice}),action)(WuyeNotice);