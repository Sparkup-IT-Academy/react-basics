import { Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';


export default function App() {
  return (
    <>
      <div className='mt-2'>
          <Routes>
              <Route path='/' element={<HomePage/>}></Route>
          </Routes> 
      </div>
    </>
  )
}
