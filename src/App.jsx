import { Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Intro from "./pages/Intro";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Main />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      <Route
        path="/intro"
        element={<Intro />}
      />
    </Routes>
  );
};

export default App;