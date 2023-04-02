import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './compontents/Home';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layouts from "./compontents/Layouts.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: 'layouts',
        element: <Layouts title='Layouts' />
      },
      {
        path: 'account-settings',
        element: <Layouts title='Account Settings' />
      },
      {
        path: 'authentication',
        element: <Layouts title='Authentication' />
      },
      {
        path: 'misc',
        element: <Layouts title='Misc' />
      },
      {
        path: 'cards',
        element: '<h1>Cards</h1>'
      },
      {
        path: 'user-interface',
        element: '<h1>User Interface</h1>'
      },
      {
        path: 'extended-ui',
        element: `<h1>Extended UI</h1>`
      },
      {
        path: 'boxicons',
        element: "<h1>Boxicons</h1>"
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
