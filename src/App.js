import React from 'react';
import logo from './logo.svg';
import Button from './ui/Button/Button.js';
import Header from './ui/Header/Header.js';
import './styles/main.scss';
import './App.css';

function App() {

  return (
    <div className="App">
      
      <Header homeText="PaperSpace"/>

      Form here:
      <Button text="Submit" styleType="primary"/>
      <Button text="Cancel" styleType="secondary"/>
      <Button text="Cancel" styleType="primary"/>
      <Button text="Cancel" styleType="tertiary"/>
    </div>
  );
}

export default App;
