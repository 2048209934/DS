import React, { Component } from 'react';
import './App.css';
import Boss from './component/Boss'
import Wuye from './component/Wuye'
import Yezhu from './component/Yezhu'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Route exact path='/' render={() => (
            	<div className="app_con">
                  <div className="dl_top">
                      <p> LIVE   HERE </p>
                      <p>mahatma</p>
                  </div>
                 {/* <div className="app">
                    <Link to="/boss">我是BOSS</Link>
                    <Link to="/wuye">我是物业</Link>
                    <Link to="/yezhu">我是业主</Link>   
                  </div>*/}
                  <div className="circle">
                        <div className="circle_con">
                            <img src="images/app.png" alt=""/>
                        </div>
                        <Link to="/boss" className="circle_one"><img src="images/boss.png" alt=""/><p>boss</p></Link>
                        <Link to="/yezhu" className="circle_two"><img src="images/yezhu.png" alt=""/><p>owner</p></Link>
                        <Link to="/wuye" className="circle_three"><img src="images/wuye.png" alt=""/><p>property</p></Link>
                  </div>
              </div>
            )} />             
            <Route path="/boss" component={Boss} />
            <Route path="/wuye" component={Wuye} />
            <Route path="/yezhu" component={Yezhu} />
            
        </div>
      </Router>
    );
  }
}

export default App;
