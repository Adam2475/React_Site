import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import React from "react";
import Map from "./components/maps/Map";
import Main from "./components/Main";
import CardCarousel from "./components/carousels/CardCarousel";
import HeaderCarousel from "./components/carousels/HeaderCarousel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import History from "./components/pages/historyPage";
import Rooms from "./components/pages/roomsPage";
 
function HomePage() {
  return (
    <>
      <HeaderCarousel />
      <Main />
      <CardCarousel />
      <Map />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/history" element={<History />} />
            <Route path="/rooms" element={<Rooms />} />
          </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
