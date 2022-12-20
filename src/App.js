import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage'
import StatusRoute from './routes/StatusRoute'
import Login from './auth/Login'
import Page201 from './status/Page201'
import Page401 from './status/Page401'
import Page402 from './status/Page402'
import Page404 from './status/Page404'
import Page500 from './status/Page500'
import Page504 from './status/Page504'
import Addcategory from './pages/Addcategory'
import AddCountry from './pages/AddCountry'
import AddState from './pages/AddState'
import InProgressGriev from './pages/InProgressGriev'
import SolvedGriev from './pages/SolvedGriev'
import UserProfile from './pages/UserProfile'
import Statistics from './pages/Statistics'
import Register from './auth/Register'
import ProtectedRoute from './routes/ProtectedRoutes'
import { UserAuthContextProvider } from './context/UserAuthContext'

function App() {
  return (
    <div>
      <Router>
        <UserAuthContextProvider>
          <Routes>
            {/* Global Routes */}
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboardTest' element={<Dashboard />} />


            {/* Protected Routes */}
            <Route path='/dashboard' element={<ProtectedRoute element={<Dashboard />}/>} />
            <Route path='/addcategory' element={<ProtectedRoute element={<Addcategory />}/>} />
            <Route path='/addcountry' element={<ProtectedRoute element={<AddCountry />}/>} />
            <Route path='/addstate' element={<ProtectedRoute element={<AddState />}/>} />
            <Route path='/inporgressgriev' element={<ProtectedRoute element={<InProgressGriev />}/>} />
            <Route path='/solvedgriev' element={<ProtectedRoute element={<SolvedGriev />}/>} />
            <Route path='/userprofile' element={<ProtectedRoute element={<UserProfile />}/>} />
            <Route path='/statistics' element={<ProtectedRoute element={<Statistics />}/>} />


            {/* Status Routes */}
            <Route path='/success' element={<StatusRoute component={<Page201 />} />} />
            <Route path='/auth-error-401' element={<StatusRoute component={<Page401 />} />} />
            <Route path='/payment-required-402' element={<StatusRoute component={<Page402 />} />} />
            <Route path='*' element={<StatusRoute component={<Page404 />} />} />
            <Route path='/server-error-500' element={<StatusRoute component={<Page500 />} />} />
            <Route path='/gateway-time-out-504' element={<StatusRoute component={<Page504 />} />} />
          </Routes>
        </UserAuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
