import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import {Toaster} from 'react-hot-toast';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import ProtectedRoute from './Components/ProtectedRoute';
import PublicRoute from './Components/PublicRoute';
import ApplyTherapist from './Components/ApplyTherapist';
import { useSelector } from 'react-redux';
import Notifications from './Pages/Notifications';
import UserList from './Pages/Admin/UserList';
import TherapistList from './Pages/Admin/TherapistList';
import FrontPage from './Pages/FrontPage/FrontPage';

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <div className="App">
      <BrowserRouter>
        {loading && (
          <div className="main-loader">
            <div class="spinner-border" role="status"></div>
          </div>
        )}
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<FrontPage/>}/>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Registration />
              </PublicRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/apply-therapist"
            element={
              <ProtectedRoute>
                <ApplyTherapist />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <ProtectedRoute>
                <Notifications/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/userlist"
            element={
              <ProtectedRoute>
                <UserList/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/therapist-list"
            element={
              <ProtectedRoute>
                <TherapistList/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
