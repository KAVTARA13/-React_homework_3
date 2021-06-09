import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorBoundary from './components/error-boundary';
import rootStore from './redux/store';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={rootStore}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
