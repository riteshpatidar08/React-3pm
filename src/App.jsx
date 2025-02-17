import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Trending from './pages/Trending';
import Navbar from './components/Navbar';
import About from './pages/About';
import User from './pages/User';
import Usersdetail from './pages/Usersdetail';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Departments from './pages/Departments';
import ProtectedRoutes from './pages/ProtectedRoutes';
import UseReducer from './pages/useReducer';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './redux/slices/counterSlice';

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const usersData = [
    { id: 1, name: 'Aman', address: 'jaipur' },
    { id: 2, name: 'Vikas', address: 'kota' },
  ];
  return (
    <div>
      <Navbar />

      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/reducer" element={<UseReducer />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<User usersData={usersData} />} />
        <Route
          path="/users/:id"
          element={<Usersdetail usersData={usersData} />}
        />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="departments" element={<Departments />} />
        </Route>
      </Routes>
      <div>
        <p>{count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button>decrement</button>
      </div>
    </div>
  );
}

export default App;
