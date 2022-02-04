import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles } from './styles'; // styled-component 파일을 임포트해오고
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
