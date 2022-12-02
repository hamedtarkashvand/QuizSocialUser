import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate  
} from "react-router-dom";
import Header from './components/header';
import Home from './pages/Home';
import Setting from './pages/Setting';
  const RoutesApp = () =>{
    return (
      <Router>
          <Header/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/settings" element={<Setting />}  />
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
     </Router>
    )
  }

  export default RoutesApp