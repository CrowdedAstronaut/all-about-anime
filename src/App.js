import ReactPaginate from "react-paginate";
import { Routes, Route, useParams } from "react-router-dom";
import About from "./components/About/About";
import "./App.css";
import NavHeader from "./components/NavHeader/NavHeader";
import Home from "./components/Home/Home";
import Card from "./components/Card/Card";
import CardDetails from "./components/CardDetails/CardDetails";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";

function App() {
  return (
    <>
      {/* <NavHeader /> */}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/details/:id" element={<CardDetails />} />
      </Routes>
    </>
  );
}

export default App;
