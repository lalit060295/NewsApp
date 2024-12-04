import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default class App extends Component {

  apikey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/general" element={<News apikey={this.apikey} key="general" pageSize={5} country="us" category="general" />} />
            <Route path="/business" element={<News apikey={this.apikey} key="business" pageSize={5} country="us" category="business" />} />
            <Route path="/entertainment" element={<News apikey={this.apikey} key="entertainment" pageSize={5} country="us" category="entertainment" />} />
            <Route path="/health" element={<News apikey={this.apikey} key="health" pageSize={5} country="us" category="health" />} />
            <Route path="/science" element={<News apikey={this.apikey} key="science" pageSize={5} country="us" category="science" />} />
            <Route path="/sports" element={<News apikey={this.apikey} key="sports" pageSize={5} country="us" category="sports" />} />
            <Route path="/technology" element={<News apikey={this.apikey} key="technology" pageSize={5} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
