import React from 'react';
import './App.css';
import Header from './components/Header';
import TopSection from './components/TopSection';
import Featured from './components/Featured';
import ReadyToSell from './components/ReadyToSell';

export default function App() {
  return(
    <div>
      <Header/>
      <TopSection/>
      <Featured/>
      <ReadyToSell/>
    </div>
  )
  
}
