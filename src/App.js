
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import LandPage from './LandPage';
import SignUp from  './SignUp';
import ForgotPassword from './ForgotPassword';


const App=()=>{
  return (
      <>
      <Routes>
      <Route path="/" element={ <LandPage/> } />
      <Route path="/signup" element={ <SignUp/> } />
      <Route path="/forgotpassword" element={ <ForgotPassword/> } />
      </Routes>
      </>
  );
}
export default App;