import logo from "./logo.svg";
import "./App.css";
import useDowellLogin from "./useDowellLogin";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";

function App() {
  useDowellLogin();

  return (
    <Routes>
      <Route path={"/"} element={<Login />} />
    </Routes>
  );
}

export default App;
