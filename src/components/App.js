import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './views/MainPage/Main';
import Login from './views/LoginPage/Login';
import Register from './views/RegisterPage/Register';
import Header from './views/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact={true} path='/' element={<Main />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
