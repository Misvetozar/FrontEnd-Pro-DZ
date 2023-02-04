import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import theme from './theme';
import {Provider} from "react-redux";
import { ThemeProvider } from '@mui/system';
import { getUsers } from './store/actions/user';
import store from './store';

store.dispatch(getUsers());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
        <ThemeProvider theme={theme}>
  <BrowserRouter>

      <App />

  </BrowserRouter>
  </ThemeProvider>
  </Provider>
);

