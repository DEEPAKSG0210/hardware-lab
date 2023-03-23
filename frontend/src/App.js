import "./styles/tailwind.output.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import StudentLogin from "./components/student-login";
import StudentSignup from "./components/student-signup";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/student-signup" element={<StudentSignup />} />
          <Route path="*" element={<Navigate to="/" />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
