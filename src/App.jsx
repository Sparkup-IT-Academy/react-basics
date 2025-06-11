import { Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Reducer from './pages/Reducer';


export default function App() {
  return (
    <>
      <div className='mt-2'>
          <Routes>
              <Route path='/' element={<HomePage/>}></Route>
              <Route path='/reducer' element={<Reducer/>}></Route>
          </Routes> 
      </div>
    </>
  )
}
