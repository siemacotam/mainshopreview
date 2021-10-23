import React, { useState } from "react";
import { useHistory } from "react-router";

const Search = () => {
  const [search, setSearch] = useState("");

  const history = useHistory();

  const handleChange = (e) => {
    const data = e.target.value;
    setSearch(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      history.push({
        pathname: "/search",
        search: `?search=${search}`,
        state: {
          searchedItem: { search },
        },
      });
      setSearch("");
    } else {
      alert("Wpisz nazwę produktu którego szukasz");
    }
  };
  return (
    <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        className="form-control mr-sm-2"
        type="search"
        placeholder="Czego szukasz ?"
        aria-label="Search"
        value={search}
      />
      <button
        className="btn btn-outline-success my-2 my-sm-0"
        type="submit"
        data-toggle="collapse"
        data-target=".navbar-collapse.show"
      >
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
};

export default Search;
