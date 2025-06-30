import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/auth-provider";
import { PrivateRoute } from "./components/private-route";
import { lazy, Suspense } from "react";
import ErrorBoundary from "../error-boundary";

const Episodes = lazy(() =>
  import("./pages/episodes/episodes").then((module) => ({
    default: module.Episodes,
  }))
);

const Characters = lazy(() =>
  import("./pages/characters/characters").then((module) => ({
    default: module.Characters,
  }))
);

const NotFound = lazy(() =>
  import("./pages/not-found/not-found").then((module) => ({
    default: module.NotFound,
  }))
);

const Locations = lazy(() =>
  import("./pages/locations/locations").then((module) => ({
    default: module.Locations,
  }))
);

const Location = lazy(() =>
  import("./pages/location/location").then((module) => ({
    default: module.Location,
  }))
);

const Character = lazy(() =>
  import("./pages/character/character").then((module) => ({
    default: module.Character,
  }))
);

const Home = lazy(() =>
  import("./pages/home/home").then((module) => ({
    default: module.Home,
  }))
);

const Episode = lazy(() =>
  import("./pages/episode/episode").then((module) => ({
    default: module.Episode,
  }))
);

const Singin = lazy(() =>
  import("./pages/singin/singin").then((module) => ({
    default: module.Singin,
  }))
);

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <div className="container">
          <Routes>
            <Route element={<Navbar />}>
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
                  <ErrorBoundary>
                    <PrivateRoute>
                      <Location />
                    </PrivateRoute>
                  </ErrorBoundary>
                }
              ></Route>
            </Route>
            <Route path="/login" element={<Singin />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
