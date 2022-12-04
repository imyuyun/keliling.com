import React from 'react';
import './App.css';
import MainConten from './components/MainConten';
import Navigation from "./component/Navigation";
import Hotel from './component/Hotel';
import Flight from './component/Flight';

function App() {
  return(
    // jika memiliki lebih dari 1 komponen maka di bungkus dengan div
  <div>
    <Navigation />
    <MainConten />
    <Hotel />
    <Flight />
  </div> 
  )
}

export default App;