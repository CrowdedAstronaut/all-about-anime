import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CardDetails() {
  let { id } = useParams();

  const [anime, setAnimeDetails] = useState(null);
  useEffect(() => {
    const getAnimeDetails = async () => {
      const DETAILS_SEARCH = {
        url: `https://kitsu.io/api/edge/anime/${id}`,
      };
      const detailsEndPoint = `${DETAILS_SEARCH.url}`;
      try {
        // fetch
        const response = await fetch(detailsEndPoint);
        const data = await response.json();
        let data2 = Object.values(data)[0];
        setAnimeDetails(data2);
        // console.log(id.id);
        console.log(data2);
      } catch (err) {
        console.log(err);
      }
    };

    getAnimeDetails();

    // console.log(anime.attributes.slug);
    console.log(typeof id);
    console.log(anime);
    // eslint-disable-next-line
  }, []);

  if (!anime) {
    return null;
  } else {
    return (
      <div className="card-details">
        <div className="card-header">
          <h1>{anime.attributes.canonicalTitle}</h1>
          <div className="card-image">
            <img
              src={anime.attributes.posterImage.original}
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
}
