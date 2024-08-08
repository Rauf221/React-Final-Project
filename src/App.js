import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './component/pages/Homepage/homepage';
import Page2 from './component/pages/example4/page2';
import { ThemeProvider } from './component/Dark&Lightmode/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
