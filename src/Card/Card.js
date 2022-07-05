export default function Card({ card }) {
  return (
    <div className="card">
      <div className="card-image">
        {
          <img
            src={card.attributes.posterImage.original}
            alt={card.attributes.canonicalTitle}
          />
        }
      </div>
      <div className="card-title">
        <h3>{card.attributes.canonicalTitle}</h3>
        <p></p>
      </div>
    </div>
  );
}
