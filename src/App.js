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

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/episodes" element={<Episodes />}></Route>
          <Route path="/characters" element={<Characters />}></Route>
          <Route path="/locations" element={<Locations />}></Route>
          <Route path="/episodes/:id" element={<Episode />}></Route>
          <Route path="/characters/:id" element={<Character />}></Route>
          <Route path="/locations/:id" element={<Location />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
