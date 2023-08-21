//import logo from './logo.svg';
//Your API key is: 2d48edd9a5ba48dab3cc3981f2f66832


import './App.css';
import Navbar from './components/Navbar';
import News  from './components/News';
import React, { Component } from 'react'
//import React, {useState} from "react";
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Main,
  Routes,
  Route
  
} from "react-router-dom";

export default class App extends Component {
  
  state={
    progress:0
  }
  setProgress=(progress)=>
  {
    this.setState({progress: progress})
  }
  render() {
    return (
      <>
      <div>
        <Main>

      { /*{hello my first class based component {this.c}}*/}
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}

      />

      <Routes>
      <Route exact path='/general' element={<News setProgress={this.setProgress} key="general"  pageSize={15} country={"in"} category={"general"}/>}/>       
      <Route exact path='/science' element={<News setProgress={this.setProgress} key="science" pageSize={15} country={"in"} category={"science"}/>}/>       
      <Route exact path='/entertainment' element={<News setProgress={this.setProgress} key="entertainment" pageSize={15} country={"in"} category={"entertainment"}/>}/>       
      <Route exact path='/health' element={<News setProgress={this.setProgress} key="health" pageSize={15} country={"in"} category={"health"}/>}/>       
      <Route exact path='/sports' element={<News setProgress={this.setProgress} key="sports" pageSize={15} country={"in"} category={"sports"}/>}/>       
      <Route exact path='/technology' element={<News setProgress={this.setProgress} key="technology" pageSize={15} country={"in"} category={"technology"}/>}/>       
      <Route exact path='/business' element={<News setProgress={this.setProgress} key="business" pageSize={15} country={"in"} category={"business"}/>}/>       

      </Routes>
      </Main>

      </div>
      </>
    )
  }
}
