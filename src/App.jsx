import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Intro from "./pages/Intro";
import Data from "./pages/Data";

import AnalysisLayout from "./pages/analysis/AnalysisLayout";
import Analysis1 from "./pages/analysis/Analysis1";
import Analysis2 from "./pages/analysis/Analysis2";
import Analysis3 from "./pages/analysis/Analysis3";
import AnalysisLoading from "./pages/analysis/AnalysisLoading";
import AnalysisResult from "./pages/analysis/AnalysisResult";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />

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

      <Route
        path="/data"
        element={<Data />}
      />

      {/* Analysis */}
      <Route
        path="/analysis"
        element={<AnalysisLayout />}
      >
        <Route
          index
          element={
            <Navigate
              to="1"
              replace
            />
          }
        />

        <Route
          path="1"
          element={<Analysis1 />}
        />

        <Route
          path="2"
          element={<Analysis2 />}
        />

        <Route
          path="3"
          element={<Analysis3 />}
        />
      </Route>

      <Route
        path="/analysis/loading"
        element={<AnalysisLoading />}
      />

      <Route
       path="/analysis/result"
        element={<AnalysisResult />}
      />
    </Routes>
  );
};

export default App;