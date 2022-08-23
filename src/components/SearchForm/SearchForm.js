import TextField from "@mui/material/TextField";
import List from "../List/List";
export default function SearchForm({
  animes,
  handleChange,
  handleSubmit,
  searchString,
}) {
  console.log(animes);
  return (
    <div className="search">
      {/* <form
        onSubmit={handleSubmit}
        className="form-horizontal"
      > */}
      {/* <label htmlFor="searchQuery"></label> */}
      <TextField
        id="searchQuery"
        variant="outlined"
        fullWidth
        label="Search"
        type="text"
        placeholder="Search for an anime character"
        onChange={handleChange}
        value={searchString}
      />

      {/* <button
        className="find"
        type="submit"
        // onClick={handleSubmit}
      >
        SEARCH
      </button> */}
      {/* </form> */}
      {/* <List /> */}
    </div>
  );
}
