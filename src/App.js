import './App.css';
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import { RecipeList } from './pages/recipes/recipes';
import { Add } from './pages/add/add.js';
import { View } from './pages/viewer/view.js';

export function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<View />} />
    <Route path="/add" element={<Add />} />
  </Routes>
</BrowserRouter>
}