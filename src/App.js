import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Roles from "./components/Roles";
import Settings from "./components/Settings";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={
          <ProtectedRoute>
            <Layout>
              <Home />
            </Layout>  
          </ProtectedRoute> 
        } 
      />
      <Route path="/roles" element={
        <ProtectedRoute>
          <Layout>
            <Roles />
          </Layout>
        </ProtectedRoute>
      } />
      <Route path="/settings" element={
        <ProtectedRoute>
          <Layout>
            <Settings />
          </Layout>
        </ProtectedRoute>
      } />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
