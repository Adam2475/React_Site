import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import React from "react";
import Map from "./components/maps/Map";
import Main from "./components/Main";
import CardCarousel from "./components/carousels/CardCarousel";
import Card from "./components/cards/Card";
 
function App() {
  return (
    <div className="App">
      <Header/>
        <Main />
        {/* <Card /> */}
        <CardCarousel />
        <Map />
      <Footer/>
    </div>
  )
}

export default App
