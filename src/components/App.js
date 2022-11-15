import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './views/MainPage/Main';
import Login from './views/LoginPage/Login';
import Register from './views/RegisterPage/Register';
import Header from './views/Header/Header';
import Test from './views/Test/Test';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact={true} path='/' element={<Main />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='test' element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
