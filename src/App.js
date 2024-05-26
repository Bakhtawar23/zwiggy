import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Contact from './components/Contact';
import Error from './components/Error';
import Footer from './components/Footer';
import RestaurantMenu from './components/RestaurantMenu';
import ShimmerUI from './components/Shimmer';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';

const Grocery = lazy(() => import('./components/Grocery'));
const About = lazy(() => import('./components/About'));

const App = () => {
  return(
    <Provider store={appStore}>
    <div className="app">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
    </Provider>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path:"/about",
        element: <Suspense fallback={<ShimmerUI/>}><About/></Suspense>
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path:"/cart",
        element: <Cart/>
      },
      {
        path:"/grocery",
        element: <Suspense fallback={<ShimmerUI/>}><Grocery/></Suspense>
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantMenu/>
      }
    ]
  },
])

export default App
