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
import { Provider } from 'react-redux';
import store from './utils/store';
import Product from './pages/productview';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      {/* <Main /> */}
      <Footer />
    </Provider >
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
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/product/:id',
        element: <Product/>
      }
    ]
  }
]);

// export default App;

export default appRouter;
