export default function SearchForm({
  handleChange,
  handleSubmit,
  searchString,
}) {
  return (
    <div className="search">
      <form
        onSubmit={handleSubmit}
        className="form-horizontal"
      >
        <input
          placeholder="Search"
          type="text"
          name="searchString"
          onChange={handleChange}
          value={searchString}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
