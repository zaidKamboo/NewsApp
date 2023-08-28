import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
const App = () => {
  // let apikey = process.env.REACT_APP_NEWS_API_KEY;
  let apikey = "d6bb853b0c674d0387e9d18bdf972f0c";
  const [progress, setProgress] = useState(0);
  return (
    <Router>
      <LoadingBar color="#f11946" progress={progress} />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="general"
              pagesize={18}
              category="general"
              country="in"
            />
          }
        />
        <Route
          path="/sports"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="sports"
              pagesize={18}
              category="sports"
              country="in"
            />
          }
        />
        <Route
          path="/technology"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="technology"
              pagesize={18}
              category="technology"
              country="in"
            />
          }
        />
        <Route
          path="/science"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="science"
              pagesize={18}
              category="science"
              country="in"
            />
          }
        />
        <Route
          path="/business"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="business"
              pagesize={18}
              category="business"
              country="in"
            />
          }
        />
        <Route
          path="/health"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="health"
              pagesize={18}
              category="health"
              country="in"
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="entertainment"
              pagesize={18}
              category="entertainment"
              country="in"
            />
          }
        />
      </Routes>
    </Router>
  );
};
export default App;
