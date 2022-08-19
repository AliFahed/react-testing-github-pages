import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
