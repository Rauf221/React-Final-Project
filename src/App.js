import React from 'react';
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';
import Homepage from './component/pages/Homepage/homepage';
import Page2 from './component/pages/example4/page2';
import { ThemeProvider } from './component/Dark&Lightmode/ThemeContext';
import { routers } from './rutes';

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider  router={routers}/>
    </ThemeProvider>
  );
};

export default App;
