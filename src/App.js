import React, { Component } from 'react'
import './App.scss';
import Navbar from "./components/Navbar/navbar"
import TourList from "./components/TourList"



export default class App extends Component {
  render() {
    return (
     <React.Fragment>
       <Navbar></Navbar>
       
       <TourList></TourList>
      
     </React.Fragment>
    )
  }
}


