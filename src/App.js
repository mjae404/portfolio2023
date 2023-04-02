import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/MpStyle.scss';

import MpLayout from './components/layout/MpLayout';
import MpIndex from './pages/MpIndex';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MpLayout />}>
            <Route index element={<MpIndex />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
