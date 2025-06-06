import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <Routes>
        <Route path='/' element={<IndexPage/>}></Route>
        <Route path='/home' element={<HomePage/>}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
    </Routes>
  )
}
