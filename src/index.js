import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './Dynamic Routing/Blog';
import AllData from './Dynamic Routing/AllData';

const root = ReactDOM.createRoot(document.getElementById('root'));
let route = createBrowserRouter([
  {
    path: '/',
    element: <Blog />
  },
  {
    path: '/:category',
    element: <AllData />
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);

reportWebVitals();