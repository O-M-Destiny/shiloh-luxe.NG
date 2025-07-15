import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';

import Homepage from './pages/Homepage';
import AdminLogin from './Admin/AdminLogin';
import AdminDashboard from './Admin/AdminDashboard';
import AdminSendEmail from './Admin/AdminSendEmail';
import DashboardLayout from './Admin/DashboardLayout';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        <Route index element={<Homepage />} />
        <Route path='login' element={<AdminLogin />} />
        <Route path='dashboard' element={<DashboardLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path='send-email/:id' element={<AdminSendEmail />} />
        </Route>
        <Route path='*' element={<p>Page not found</p>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
