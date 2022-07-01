export default function SearchForm({
  handleChange,
  handleSubmit,
  searchString,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search"
        type="text"
        name="searchString"
        onChange={handleChange}
        value={searchString}
      />
      <button type="submit"></button>
    </form>
  );
}
