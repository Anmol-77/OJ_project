// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './routes/AuthContext';
import Home from './routes/home';
import NavBar from './routes/navbar';
import Problemset from './routes/problems';
import Solve from './routes/solve'
import Addproblem from './routes/addproblem';
import Login from './routes/login';
import Register from './routes/register';
import PrivateRouteUser from './routes/privateRouteUser';

import Logout from './routes/logout'; 
import PrivateRoute from './routes/privateRouteAdmin';
 
const App = () => {
   return (
      <BrowserRouter>
          <NavBar/>
          <AuthProvider>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/problemset" element={<Problemset />} />
            <Route element={<PrivateRouteUser />}>
               <Route path="/problemset/:id" element={<Solve/>} /> 
            </Route>
            <Route element={<PrivateRoute />}>
               <Route path="/add" element={<Addproblem/>} /> 
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/logout" element={<Logout/>}/>
         </Routes>
         </AuthProvider>
      </BrowserRouter>
   );
};
 
export default App;