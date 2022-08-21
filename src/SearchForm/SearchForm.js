export default function SearchForm({
  card,
  handleChange,
  handleSubmit,
  searchString,
}) {
  // console.log(card);
  return (
    <div className="search">
      <form
        onSubmit={handleSubmit}
        className="form-horizontal"
      >
        <label htmlFor="searchQuery"></label>
        <input
          type="text"
          id="searchQuery"
          placeholder="Search for an anime character"
          onChange={handleChange}
          value={searchString}
        />
        <button
          className="find"
          type="submit"
          // onClick={handleSubmit}
        >
          SEARCH
        </button>
      </form>
      {/* <Card card={card} /> */}
    </div>
  );
}
