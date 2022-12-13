import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
const Header = React.lazy(() => import("./components/header"));
const Home = React.lazy(() => import("./pages/Home"));
const Setting = React.lazy(() => import("./pages/Setting"));
// import Header from './components/header';

const RoutesApp = () => {
  return (
    <React.Suspense fallback={(<h1>loading ...</h1>)}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default RoutesApp;
