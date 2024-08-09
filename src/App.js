import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './component/Dark&Lightmode/ThemeContext';
import { routers } from './rutes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routers} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
