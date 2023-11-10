import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { SearchProvider } from './context/SearchContext';

import AppRoutes from './components/AppRoutes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SearchProvider>
      <Router>
        <AppRoutes />
      </Router>
    </SearchProvider>
  </React.StrictMode>
);
