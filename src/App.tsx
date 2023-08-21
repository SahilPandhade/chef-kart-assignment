import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeView from './components/HomeView/HomeView';
import TitleBar from './components/TitleBar/TitleBar';
import { Route, Routes } from 'react-router-dom';
import IngredientPage from './components/IngredientPage/IngredientPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<><TitleBar/><HomeView/></>}/>
      <Route path='/ingredients' element={<IngredientPage/>}/>
    </Routes>
  );
}

export default App;
