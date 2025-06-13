import { Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Reducer from './pages/Reducer';
import Memo from './pages/Memo';
import Callback from './pages/Callback';


export default function App() {
  return (
    <>
      <div className='mt-2'>
          <Routes>
              <Route path='/' element={<HomePage/>}></Route>
              <Route path='/reducer' element={<Reducer/>}></Route>
              <Route path='/memo' element={<Memo />}></Route>
              <Route path='/callback' element={<Callback />}></Route>
          </Routes> 
      </div>
    </>
  )
}
