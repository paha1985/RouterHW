import "./App.css";
import { Navbar } from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import {
  Episodes,
  Home,
  Locations,
  NotFound,
  Characters,
  Character,
  Location,
} from "./pages";
import { Episode } from "./pages/episode";
import Signin from "./pages/singin";
import { AuthProvider } from "./context/auth-provider";
import { PrivateRoute } from "./components/private-route";

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

            <Route path="/characters" element={<Characters />}></Route>
            <Route path="/locations" element={<Locations />}></Route>
            <Route path="/episodes/:id" element={<Episode />}></Route>
            <Route path="/characters/:id" element={<Character />}></Route>
            <Route path="/locations/:id" element={<Location />}></Route>
            <Route path="/login" element={<Signin />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
