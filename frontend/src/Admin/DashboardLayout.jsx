import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <h2 style={{ marginBottom: "1rem" }}>Admin Dashboard</h2>
      <Outlet /> {/*  This is where nested routes render */}
    </div>
  );
};

export default DashboardLayout;
