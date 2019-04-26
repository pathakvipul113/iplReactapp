import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Scorecard from './Scorecard'
import Home from './Home'
import PointsTable from './PointsTable'
import Schedule from './Schedules'

// import Background from './IPL-logo.jpg'

class App extends Component {
  onClick() {
  }



  render() {
    return (
      <div>
        <div style={{
          position: 'relative',
          height: '48px',
          background: 'grey',
          color: 'white',
        }}>
          <a href="/" onClick={this.onClick.bind(this)}><img src={require('./IPL-logo.jpg')} height="50px" width="100px" /></a>
          <a href="/pointstable" onClick={this.onClick.bind(this)} style={{ color: 'white', padding: '18px' }}>Points Table </a>
          <a href="/schedules" onClick={this.onClick.bind(this)} style={{ color: 'white', padding: '18px' }}>Schedule and Results </a>

        </div>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/scorecard" component={Scorecard} />
          <Route path="/pointstable" component={PointsTable} />
          <Route path="/schedules" component={Schedule} />
        </Router>
      </div >
    )
  }
}

export default App;
