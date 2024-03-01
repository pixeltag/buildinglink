import React from 'react';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import Header from './components/layout/Header';
import Home from './pages/home';

function App() {
  return (
    <ErrorBoundary>
      <div className="App" data-testid="app">
        <Header />
        <div className='container'>
          <Home data-testid="home" />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
