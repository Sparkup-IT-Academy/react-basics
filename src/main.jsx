import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
// import ConditionalRendering from './components/ConditionalRendering';
// import ListRendering from './components/ListRendering';
import './index.css';
import State from './components/Demo';
import BatchUpdate from './components/BatchUpdate';
import Cleanup from './components/Cleanup';
import ApiDemo from './components/ApiDemo';
// import EffectHook from './components/EffectHook';
// import EventHandling2 from './components/EventHandling2';

createRoot(document.getElementById('root')).render(
  <ApiDemo />
    // <StrictMode>
    // </StrictMode>
) 
