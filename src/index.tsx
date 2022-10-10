import React from 'react';
import ReactDOM from 'react-dom/client';
import './common/style/index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Authentication } from './pages/Authentication';
import { MainStudents } from './pages/MainStudents';
import { Courses } from './pages/Courses';
import './common/style/App.css';
import './common/style/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Authentication />,
  },
  {
    path: "*",
    element: <Authentication />,
  },
  {
    path: "/main",
    element: <MainStudents />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
]);

root.render(
  <React.StrictMode>
    <div className="App">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
