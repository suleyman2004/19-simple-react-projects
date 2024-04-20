import React, { useEffect, useState } from "react";
import User from "./user";
import "./style.css";

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("suleyman2004");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }
  }

  useEffect(() => {
    // We write again fetchGithubUserData function to avoid 'useEffect  has missing dependency:" fetchGithubUserData"' message 
    async function fetchGithubUserData() {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();
        if (data) {
          setUserData(data);
          setLoading(false);
          setUserName("");
        }
      }

    fetchGithubUserData();
  }, [userName]);

  if (loading) {
    return <h1>Loading data ! Please wait</h1>;
  }
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={fetchGithubUserData}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
};

export default GithubProfileFinder;
