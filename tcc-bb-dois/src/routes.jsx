import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './home';
import PublicApp from "./publicoalvo";
import Idea from './ideias';
import Equip from './materiais';
import Project from './projeto';
import Info from './info';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/publicoalvo" element={<PublicApp />} />
            <Route path='/ideias' element={<Idea />} />
            <Route path='/materiais' element={<Equip />} />
            <Route path='/projeto' element={<Project />} />
            <Route path='/bibliografia' element={<Info />} />
        </Routes>
    );
}

export default Router