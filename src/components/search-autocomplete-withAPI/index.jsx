import React, { useEffect, useState } from "react";
import Suggestions from "./suggestions";

const SearchAutocomplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  function handleClick(event){
    setShowDropdown(false)
    setSearchParam(event.target.innerText)
    setFilteredUsers([])
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      console.log(data);
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  return (
    <div style={{marginTop:"50px", height:"200px"}}>
      {loading ? (
        <h1>Loading Data ! Please wait</h1>
      ) : (
        <input
          value={searchParam}
          type="text"
          name="search-users"
          placeholder="Search Users here..."
          onChange={handleChange}
        />
      )}

      {showDropdown && <Suggestions handleClick={handleClick} data={filteredUsers} />}
    </div>
  );
};

export default SearchAutocomplete;
