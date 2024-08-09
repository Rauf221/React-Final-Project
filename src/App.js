import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './component/Dark&Lightmode/ThemeContext';
import { routers } from './rutes.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}> 
        <RouterProvider router={routers} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
