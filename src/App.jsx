import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css'; // for FontAwesome
import './App.css';
import Layout from './assets/components/Layout/Layout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './assets/components/About/About.jsx';
import Contacts from './assets/components/Contacts/Contacts.jsx';
import Portfolio from './assets/components/Portfol/Portfolio.jsx';
import Home from './assets/components/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home/> },
      { path: 'about', element: <About/> },
      { path: 'contacts', element: <Contacts/> },
      { path: 'portfolio', element: <Portfolio/> },

    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
