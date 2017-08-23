import React, { Component } from 'react';
import './../css/wuye_notice.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class WuyeNotice extends Component {
  ok=function(){
    window.history.go(-1)
  }
  render() {
    return (
    	  <div className="notice">
    	  	  <div className="notice_editor">
                <span onClick={this.ok}><img src="../../images/tip.png" alt=""/></span>
                <span>小区通知</span>
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

export default WuyeNotice;