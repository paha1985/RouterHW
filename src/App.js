import "./App.css";
import { Navbar } from "./components/navbar";
import { Routes, Route } from "react-router-dom";
// import {
// Episodes,
// Home,
// Locations,
// NotFound,
// Characters,
// Character,
// Location,
// } from "./pages";

import { AuthProvider } from "./context/auth-provider";
import { PrivateRoute } from "./components/private-route";
import { lazy } from "react";

const Episodes = lazy(() =>
  import("./pages/episodes").then((module) => ({
    default: module.Episodes,
  }))
);

const Characters = lazy(() =>
  import("./pages/characters").then((module) => ({
    default: module.Characters,
  }))
);

const NotFound = lazy(() =>
  import("./pages/not-found").then((module) => ({
    default: module.NotFound,
  }))
);

const Locations = lazy(() =>
  import("./pages/locations").then((module) => ({
    default: module.Locations,
  }))
);

const Location = lazy(() =>
  import("./pages/location").then((module) => ({
    default: module.Location,
  }))
);

const Character = lazy(() =>
  import("./pages/character").then((module) => ({
    default: module.Character,
  }))
);

const Home = lazy(() =>
  import("./pages/home").then((module) => ({
    default: module.Home,
  }))
);

const Episode = lazy(() =>
  import("./pages/episode").then((module) => ({
    default: module.Episode,
  }))
);

const Singin = lazy(() =>
  import("./pages/singin").then((module) => ({
    default: module.Singin,
  }))
);

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route
              path="/episodes"
              element={
                <PrivateRoute>
                  <Episodes />
                </PrivateRoute>
              }
            ></Route>

            <Route
              path="/characters"
              element={
                <PrivateRoute>
                  <Characters />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/locations"
              element={
                <PrivateRoute>
                  <Locations />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/episodes/:id"
              element={
                <PrivateRoute>
                  <Episode />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/characters/:id"
              element={
                <PrivateRoute>
                  <Character />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/locations/:id"
              element={
                <PrivateRoute>
                  <Location />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/login" element={<Singin />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
