import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './views/MainPage/Main';
import Login from './views/LoginPage/Login';
import Register from './views/RegisterPage/Register';

function App() {
  return (
    <Routes>
      <Route exact={true} path='/' element={<Main />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
    </Routes>
  );
}

export default App;
