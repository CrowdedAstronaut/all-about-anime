import React, { useState } from "react";

const NewsCard = (props) => {
  return (
    <div style={{ padding: "20" }}>
      <a href={props.links.self}>
        {props.attributes.canonicalTitle} by {props.type}
      </a>
    </div>
  );
};

function Test() {
  const [animes, setAnimes] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);
  const [query, setQuery] = useState("cowboy");

  const URL = `https://kitsu.io/api/edge/anime?filter[text]=${query}`;

  const handleFetch = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((body) => {
        console.log(body);
        console.log(body.data);
        setAnimes([...body.data]);
        console.log(animes);
      })
      .catch((error) => console.error("Error", error));
  };

  return (
    <div>
      <label>Search</label>
      <input type="text" onChange={(event) => setQuery(event.target.value)} />
      <button onClick={handleFetch}>Get Data</button>

      {isLoaded ? (
        animes.map((anime) => {
          return (
            <NewsCard
              key={anime.id}
              url={anime.links.self}
              title={anime.attributes.canonicalTitle}
              type={anime.type}
            />
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Test;
