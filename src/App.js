import ReactPaginate from "react-paginate";
import { Routes, Route, useParams } from "react-router-dom";
import About from "./About/About";
import "./App.css";
import NavHeader from "./NavHeader/NavHeader";
import SearchForm from "./SearchForm/SearchForm";
import Home from "./Home/Home";
import Card from "./Card/Card";
import CardDetails from "./CardDetails/CardDetails";

function App() {
  return (
    <>
      <NavHeader />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route
          exact
          path="/search"
          element={<SearchForm />}
        />

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
