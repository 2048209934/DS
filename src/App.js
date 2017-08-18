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
            	<div className="app">
            		<Link to="/boss">我是BOSS</Link>
	            	<Link to="/wuye">我是物业</Link>
	            	<Link to="/yezhu">我是业主</Link>   
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
