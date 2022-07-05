import { useState, useEffect, Link } from "react";
import ReactPaginate from "react-paginate";
import { Route } from "react-router";
import About from "./About/About";
import "./App.css";
import NavHeader from "./NavHeader/NavHeader";
import SearchForm from "./SearchForm/SearchForm";
import Card from "./Card/Card";

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [animes, setAnimes] = useState([]);
  const [search, setLastSearch] = useState("");
  const [searchString, setSearchString] = useState("");
  const searchOptions = {
    api: "https://kitsu.io/api/edge",
    category: "/anime",
    numresults: 20,
    pageoffset: 0,
    endpoint: "/anime-characters",
  };
  const PER_PAGE = 10;

  useEffect(() => {
    getAnimes(searchString);
  }, []);

  async function getAnimes(searchString) {
    const url = `${searchOptions.api}${searchOptions.category}?page%5Blimit%5D=${searchOptions.numresults}&page%5Boffset%5D=${searchOptions.pageoffset}`;
    const tinkeringurl = `${searchOptions.api}${searchOptions.category}?filter[text]${searchString}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const objectData = Object.values(data)[0];
      setAnimes(objectData);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (event) => {
    setSearchString(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getAnimes(searchOptions);
  };

  const handlePageClick = ({ selected: selectedPage }) => {
    console.log("Selected Page", selectedPage);
    setPageNumber(selectedPage);
  };

  const offset = pageNumber * PER_PAGE;
  console.log("offset", offset);

  const pageNumberData = animes
    .slice(offset, offset + PER_PAGE)
    .map((card, idx) => (
      // <Link to={`/details/${card.id}`} key={card.id}>
      <Card key={card.id} card={card} />
      // </Link>
    ));

  const pageCount = Math.ceil(animes.length / PER_PAGE);

  return (
    <>
      <NavHeader />
      <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <section className="container">
        {pageNumberData}
        <ReactPaginate
          previousLabel={"<- Previous"}
          nextLabel={"Next ->"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </section>
    </>
  );
}

export default App;
