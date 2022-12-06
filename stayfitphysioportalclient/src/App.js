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
          <Route path="/" element={<Home />} />
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
