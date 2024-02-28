import React from 'react';
import Header from './components/layout/Header';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Home />
      </div>
    </div>
  );
}

export default App;
