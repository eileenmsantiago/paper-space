import React from 'react';
import Button from './ui/Button/Button.js';
import Header from './ui/Header/Header.js';
import './styles/main.scss';
// import './App.css';
import Home from './Pages/Home/Home.js';

function App() {

  return (
    <div className="App">
      <Home>

        <Header homeText="PaperSpace"/>

        Form here:
        <Button text="Submit" styleType="primary"/>
        <Button text="Cancel" styleType="secondary"/>
        <Button text="Cancel" styleType="primary"/>
        <Button text="Cancel" styleType="tertiary"/>
      </Home>
    </div>
  );
}

export default App;
