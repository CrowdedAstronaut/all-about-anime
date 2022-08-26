import { useState, useEffect } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Search from "../Search/Search";

export default function Home() {
  const [pageNumber, setPageNumber] = useState(0);
  const [animes, setAnimes] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [search, setLastSearch] = useState("");
  const searchOptions = {
    api: "https://kitsu.io/api/edge",
    category: "/anime",
    numresults: 20,
    pageoffset: 0,
    endpoint: "/anime-characters",
  };
  const PER_PAGE = 20;

  const handleChange = (event) => {
    console.log(event.target.value);
    setSearchString(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getAnimes(searchOptions);
  };

  useEffect(() => {
    getAnimes(searchString);
  }, []);

  async function getAnimes() {
    const url = `${searchOptions.api}${searchOptions.category}?page%5Blimit%5D=${searchOptions.numresults}&page%5Boffset%5D=${offset}`;

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
  const handlePageClick = ({ selected: selectedPage }) => {
    console.log("Selected Page", selectedPage);
    setPageNumber(selectedPage);
  };

  const offset = pageNumber * PER_PAGE;
  console.log("offset", offset);

  const pageNumberData = animes
    .slice(offset, offset + PER_PAGE)
    .map((card, idx) => (
      <Link to={`/details/${card.id}`} key={card.id}>
        <Card
          key={card.id}
          card={card}
          idx={idx}
          // src={card.links.next}
        />
      </Link>
    ));

  const pageCount = Math.ceil(animes.length / PER_PAGE);

  return animes.length > 0 ? (
    <>
      <Search
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchString={searchString}
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
  ) : (
    <h1>loading...</h1>
  );
}
