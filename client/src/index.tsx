import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles } from './styles'; // styled-component 파일을 임포트해오고

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
