import React from 'react';

import { Routes, Route } from 'react-router-dom';

import './styles/App.css';

import Home from '../pages/Home';
import Movie from '../pages/Movie';
import Layout from './components/Layout';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home />}></Route>
                <Route path="/filme" element={<Movie />}></Route>
            </Route>
        </Routes>
    );
}

export default App;