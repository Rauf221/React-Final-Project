import { createBrowserRouter } from 'react-router-dom';
// import Layout from './featured/layout';
// import ContactPage from './pages/contact';
import Page2 from './component/pages/example4/page2';
import Homepage from './component/pages/Homepage/homepage';
import Layout from './component/feature/Layout/layout.component';

export const routers = createBrowserRouter([
{
    path: '/',
    element: <Homepage />,
    children: [
      {
        path: '/',
        element: <Layout />,
      },
      {
        path: '/gadgets',
        element: <Page2 />,
      },
    ],
  },
]);