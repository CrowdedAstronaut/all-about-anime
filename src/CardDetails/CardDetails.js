import { useState, useEffect } from "react";

export default function CardDetails(routeProps) {
  const [uniqueCard, setUniqueCard] = useState(null);
  const name =
    routeProps.match.params.card +
    routeProps.match.params.label;

  const getApiData = async () => {
    const apiEndPoint = `${routeProps.searchOptions.api}q=${name}&app_id=${routeProps.searchOptions.id}&app_key=${routeProps.searchOptions.key}&health=${routeProps.searchHealth}`;
    try {
      const response = await fetch(apiEndPoint, {
        mode: "cors",
      });
      const data = await response.json();
      // console.log(data);
      setUniqueCard(data.hits[0].card);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(uniqueCard);

  useEffect(() => {
    getApiData();
  }, []);

  const handleClick = (event) => {
    window.open(`${uniqueCard.url}`);
  };

  return (
    <div className="anime">
      <h1>{name}</h1>
      <img src={uniqueCard.image} alt={uniqueCard.label} />
      <p>
        This Card was souced by{" "}
        <span
          style={{
            fontStyle: "italic",
            fontWeight: "bold",
          }}
        >
          {uniqueCard.source}
        </span>
      </p>
      <p>
        {uniqueCard.calories.toFixed(2)} Calories |{" "}
        {uniqueCard.yield} Servings
      </p>
      <div className="list">
        <ul className="ingredients">
          <h5>Ingredients:</h5>
          {uniqueCard.ingredientLines.map(
            (ingredient, i) => {
              return <li key={i}>{ingredient}</li>;
            }
          )}
        </ul>
        <ul className="diet-labels">
          <h5>Diet Labels:</h5>
          {uniqueCard.dietLabels.map((label, i) => {
            return <li key={i}>{label}</li>;
          })}
        </ul>

        <button onClick={handleClick} className="link">
          Click for Full Recipe
        </button>
      </div>
      <div className="space"></div>
    </div>
  );
}
