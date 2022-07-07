import { useState, useEffect } from "react";

export default function CardDetails({ match }) {
  const [anime, setAnimeDetails] = useState([]);

  const getAnimeDetails = async () => {
    const DETAILS_SEARCH = {
      url: `https://kitsu.io/api/edge/anime/1`,
    };
    const detailsEndPoint = `${DETAILS_SEARCH.url}`;
    try {
      // fetch
      const response = await fetch(detailsEndPoint);
      const data = await response.json();
      let data2 = Object.values(data)[0];
      setAnimeDetails(data2);
      console.log(data2.id);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAnimeDetails(anime);
    console.log(match);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="card-details">
      <h1>{anime.attributes.canonicalTitle}</h1>
    </div>
  );
}
