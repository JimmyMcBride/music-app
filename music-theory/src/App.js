import React from 'react';
import './App.css';
import Nav from './components/Nav'
import { Scale } from "tonal"


function App() {
  return (
    <div className="app">
      <Nav />
      { console.log(Scale.notes('D aeolian')) }
    </div>
  );
}

export default App;
