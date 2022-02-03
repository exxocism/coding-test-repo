import React from 'react';
import { useMediaQuery } from 'react-responsive';

import MainPage from './Pages/MainPage';
import MainPageMobile from './Pages/MainPageMobile';
import './App.css';

function App() {
  const isMobile: Boolean = useMediaQuery({ query: '(max-aspect-ratio: 3/4)' });

  return <>{isMobile ? <MainPageMobile /> : <MainPage />}</>;
}

export default App;
