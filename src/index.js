import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './project1/App';
import { Provider } from 'react-redux';
import { store } from './project1/store';
import App2 from './project2/App2';


const el = document.getElementById('root')
const root = createRoot(el);
root.render(
  <Provider store={store}>
    <App2 />
  </Provider>
);
