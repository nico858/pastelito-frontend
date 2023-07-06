import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Register from "./pages/Register";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import CupCakes from "./pages/CupCakes";
import CustomCupCakes from "./pages/CustomCupCakes";
import Profile from "./pages/Profile";
import NavBar from "./components/NavBar";
import Buy from "./pages/Buy";
import ShoppingCar from "./pages/ShoppingCar";

import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/pastelito-front/" element={<HomePage />} />
          <Route path="/pastelito-front/login" element={<Login />} />
          <Route path="/pastelito-front/register" element={<Register />} />
          <Route path="/pastelito-front/about" element={<h1>about</h1>} />
          <Route path="/pastelito-front/catalogo" element={<CupCakes />} />
          <Route path="/pastelito-front/buy" element={<Buy/>} />
          <Route path="/pastelito-front/customCupCakes" element={<CustomCupCakes />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/pastelito-front/profile" element={<Profile />} />
            <Route path="/pastelito-front/shoppingCar" element={<ShoppingCar/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
