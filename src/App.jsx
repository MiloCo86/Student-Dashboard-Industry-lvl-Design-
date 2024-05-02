import React from 'react';
import MainSideBar from './components/MainSideBar';
import MainNavBar from './components/MainNavBar';

import './styles/App.css';

function App() {

  return (
    <div className='main_container'>
      <MainSideBar />
      <MainNavBar />
    </div>
  );
}

export default App;
