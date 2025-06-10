import { Routes, Route, NavLink } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PokemonPage from './pages/PokemonPage';
import Details from './pages/Details';
import PokemonList from './pages/PokemonList';
import Posts from './pages/Posts';
import Children from './pages/Children';


export default function App() {
  return (
    <>
        <nav className='flex items-center gap-5 font-semibold text-grey'>
            <NavLink to="/">Index</NavLink>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/pokemon">Pokemon</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/children">Children</NavLink>
        </nav>

        <div className='mt-5'>
            <Routes>
                <Route path='/' element={<IndexPage/>}></Route>
                <Route path='/home' element={<HomePage/>}></Route>
                <Route path='/login' element={<LoginPage />}></Route>
                <Route path='/pokemon' element={<PokemonPage />}>
                  <Route path='' element={<PokemonList />}></Route>
                  <Route path=':name' element={<Details />}></Route>
                </Route>
                <Route path='/posts' element={<Posts />}></Route>
                <Route path='/children' element={<Children />}></Route>
            </Routes> 
        </div>
    </>
  )
}
