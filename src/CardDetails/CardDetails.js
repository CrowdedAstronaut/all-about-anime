import { useState, useEffect } from "react";

export default function CardDetails(props) {
  const [item, setItemDetails] = useState(null);
  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://kitsu.io/api/edge/anime/1`
    );
    const item = await fetchItem.json();
    let data = Object.values(item)[0];
    setItemDetails(data);
    console.log(data);
  };

  return (
    <div className="card-details">
      <h1>{item.attributes.canonicalTitle}</h1>
    </div>
  );
}
