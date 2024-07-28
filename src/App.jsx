import { useState } from 'react';
import './App.css';
import Layout from './assets/components/Layout/Layout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './assets/components/About/About.jsx';
import Contacts from './assets/components/Contacts/Contacts.jsx';
import Portfolio from './assets/components/Portfol/Portfolio.jsx'
import Home from './assets/components/Home/Home.jsx';
import NotFound from './assets/components/NotFound/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      { index: true, element: <Home/> },
      { path: 'about', element: <About/> },
      { path: 'contacts', element: <Contacts/> },
      { path: 'portfolio', element: <Portfolio/> },
      { path: '*', element: <NotFound/> },
    ],
  },
]);

function App() {
  return<>
   <RouterProvider router={router}>

</RouterProvider>
  </>
}

export default App;
