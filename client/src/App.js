import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About";
// import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import Forgotpassword from "./pages/Auth/Forgotpassword";
import Admniroutes from "./components/routes/Adminroutes";
import Admindashboard from "./pages/admin/Admindashboard";
import PrivateRoute from "./components/routes/Privateroutes";
import WorkshopRegister from "./pages/Auth/WorkshopRegister";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>
        <Route path="/dashboard" element={<Admniroutes />}>
          <Route path="admin" element={<Admindashboard />} />
        </Route> */}
        <Route path="/about" element={<About />} />
        <Route path="/WorkshopRegister" element={<WorkshopRegister />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/dashboard/user" element={<Dashboard />} />
        <Route path="/dashboard/admin" element={<Admindashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
