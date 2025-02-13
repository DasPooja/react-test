import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute> 
        } 
      />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
