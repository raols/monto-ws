import { useState } from 'react';

function Filter(props) {
  const [searchString, setSearchString] = useState("");
  const [sortOrder, setSortOrder] = useState("DESC");
  const [filterType, setFilterType] = useState("ALL");

  function handleSubmit(e) {
    e.preventDefault();

    let filteredCompanies = [...props.all];
    if (searchString !== "") filteredCompanies = filteredCompanies.filter(company => company.name.toLowerCase().includes(searchString.toLocaleLowerCase()))
    if (filterType !== "ALL") filteredCompanies = filteredCompanies.filter(company => company.type === filterType);

    if (sortOrder === "ASC") props.setFiltered(filteredCompanies.sort((a, b) => a.id - b.id));
    else props.setFiltered(filteredCompanies.sort((a, b) => b.id - a.id));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="block py-2">
        Search for company:
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
      </label>
      <label className="block py-2">
        Sort by id:
        <select
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value={"ASC"}>ASC</option>
          <option value={"DESC"}>DESC</option>
        </select>
      </label>
      <label className="block py-2">
        Filter by type:
        <select
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value={"ALL"}>ALL</option>
          <option value={"AB"}>AB</option>
          <option value={"HB"}>HB</option>
          <option value={"EF"}>EF</option>
        </select>
      </label>
      <input
        className="bg-purple-300 py-2 px-4 mt-4 rounded-md cursor-pointer shadow"
        type="submit"
        value="Filter"
      />
    </form>
  );
}

export default Filter;