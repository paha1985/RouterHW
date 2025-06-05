import "./App.css";
import { Navbar } from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import { Episodes, Home, Locations, NotFound, Characters } from "./pages";

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
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
