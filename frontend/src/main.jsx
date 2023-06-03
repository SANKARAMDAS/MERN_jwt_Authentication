import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider, } from 'react-router-dom'
import HomeScreens from "./screens/HomeScreens.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import { Provider } from 'react-redux';
import store from "./store.js";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route index={true} path='/' element={<HomeScreens />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            {/*<Route path='' element={<PrivateRoute />}>*/}
            {/*    <Route path='/profile' element={<ProfileScreen />} />*/}
            {/*</Route>*/}
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
