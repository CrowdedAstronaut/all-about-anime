import { useState, useEffect, Link } from "react";
import ReactPaginate from "react-paginate";
import { Routes, Route } from "react-router-dom";
import About from "./About/About";
import "./App.css";
import NavHeader from "./NavHeader/NavHeader";
import SearchForm from "./SearchForm/SearchForm";
import Card from "./Card/Card";
import Home from "./Home/Home";

function App() {
  return (
    <>
      <NavHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<SearchForm />} />
      </Routes>
    </>
  );
}

export default App;
