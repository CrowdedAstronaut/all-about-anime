import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import NavHeader from "./components/NavHeader/NavHeader";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import CardDetails from "./components/CardDetails/CardDetails";

function App() {
  return (
    <>
      <NavHeader />
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/search" element={<Search />} />
        <Route
          exact
          path="/details/:id"
          element={<CardDetails />}
        />
      </Routes>
    </>
  );
}

export default App;
