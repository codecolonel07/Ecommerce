import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/Homepage";
import LoginPage from "./pages/Loginpage";
import RegisterPage from "./pages/Registerpage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;