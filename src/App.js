import './App.css';
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import Cart from './pages/cart';
import Error from './pages/error';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Main /> */}
      <Footer />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'cart',
        element: <Cart />
      }
    ]
  }
]);

// export default App;

export default appRouter;
