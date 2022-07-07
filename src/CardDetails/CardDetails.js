import { useState, useEffect } from "react";
// import { matchPath } from "react-router";

export default function CardDetails() {
  const [anime, setAnimeDetails] = useState([]);
  useEffect(() => {
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
        // console.log(data2.id);
        console.log(data2);
      } catch (err) {
        console.log(err);
      }
    };

    getAnimeDetails(anime);
    console.log(anime);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="card-details">
      <div className="card-header">
        <h1>{anime.attributes.canonicalTitle}</h1>
        <div className="card-image">
          <img
            src={anime.attributes.coverImage.original}
            alt=""
          />
        </div>
        <p className="detail-description">
          {anime.attributes.description}
        </p>
      </div>
    </div>
  );
}
