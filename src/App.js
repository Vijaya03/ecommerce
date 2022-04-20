import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
import Home from './components/Home';
import {BrowserRouter,Router,Route, Routes} from 'react-router-dom';
function App() {
  <Routes>
    <Route path="/" element={<Home/>}></Route>
  </Routes>
}

export default App;
