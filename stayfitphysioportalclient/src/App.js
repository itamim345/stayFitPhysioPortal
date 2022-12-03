import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import {Toaster} from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
