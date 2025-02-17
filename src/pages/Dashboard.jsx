import React from 'react';
import { Link , Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      dashbaord
      <Link to="/dashboard/profile">Profile</Link>
      <Link to="/dashboard/departments">Departments</Link>
      <Outlet/>
    </div>
  );
}

export default Dashboard;
