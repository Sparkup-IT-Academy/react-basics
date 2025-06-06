import { Routes, Route, NavLink } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PokemonPage from './pages/PokemonPage';


export default function App() {
  return (
    <>
        <nav className='flex items-center gap-5 font-semibold text-grey'>
            <NavLink to="/">Index</NavLink>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/pokemon">Pokemon</NavLink>
        </nav>

        <div className='mt-5'>
            <Routes>
                <Route path='/' element={<IndexPage/>}></Route>
                <Route path='/home' element={<HomePage/>}></Route>
                <Route path='/login' element={<LoginPage />}></Route>
                <Route path='/pokemon' element={<PokemonPage />}></Route>
            </Routes> 
        </div>
    </>
  )
}
