import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/login";
import Dashboard from "./Pages/dashboard";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;