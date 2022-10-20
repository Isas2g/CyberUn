import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Authentication } from './pages/Authentication';
import { MainStudents } from './pages/MainStudents';
import { Courses } from './pages/Courses';
import { Modules } from './pages/Modules';
import { Lessons } from './pages/Lessons';
import { Calendar } from './pages/Calendar';
import { Achievements } from './pages/Achievements';
import { Testing } from './pages/Testing';
import { TestingResults } from './pages/TestingResults';
import { Course } from './pages/Course';
import './common/style/App.css';
import './common/style/index.css';
import { AdminTeachers } from './pages/Admin/Teachers';
import { AdminGroups } from './pages/Admin/Groups';
import { AdminCalendar } from './pages/Admin/Calendar';
import { AdminStudents } from './pages/Admin/Students';
import { AdminTeacherProfile } from './pages/Admin/TeacherProfile';
import { AdminStudentProfile } from './pages/Admin/StudentProfile';

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
  {
    path: "/modules",
    element: <Modules />,
  },
  {
    path: "/lessons",
    element: <Lessons />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
  },
  {
    path: "/achievements",
    element: <Achievements />,
  },
  {
    path: "/testing",
    element: <Testing />,
  },
  {
    path: "/testing-results",
    element: <TestingResults />,
  },
  {
    path: "/course",
    element: <Course />,
  },
  {
    path: '/admin',
    children: [
      {
        path: '/admin/teachers',
        element: <AdminTeachers />
      },
      {
        path: '/admin/groups',
        element: <AdminGroups />
      },
      {
        path: '/admin/calendar',
        element: <AdminCalendar />
      },
      {
        path: '/admin/students',
        element: <AdminStudents />
      },
      {
        path: '/admin/teachers/profile',
        element: <AdminTeacherProfile />
      },
      {
        path: '/admin/students/profile',
        element: <AdminStudentProfile />
      },
    ]
  }
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
