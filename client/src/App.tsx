import React from 'react';
import { useMediaQuery } from 'react-responsive';

import './App.css';

function App() {
  const isMobile: Boolean = useMediaQuery({ query: '(max-aspect-ratio: 3/4)' });

  return <div className="App">Hello World!</div>;
}

export default App;
