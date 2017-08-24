import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link to={to} className={match ? 'active' : ''}>
    	<p className="admin_one" id="admin_one" onClick={this.submits}><img src="../images/account_five.png" alt=""/></p>
      <p className="admin_two" id="admin_two"><img src="../images/account_six.png" alt=""/></p>
      <p>{label}</p>   	
    </Link>
  )}/>
)

export default OldSchoolMenuLink;