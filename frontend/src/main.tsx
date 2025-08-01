import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './style.css';

const container = document.getElementById('root');

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App name="hello" age={11} />
    </React.StrictMode>,
  );
}
