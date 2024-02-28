import React from 'react';
import Header from './components/layout/Header';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl mt-6'>
        <Home />
      </div>
    </div>
  );
}

export default App;
