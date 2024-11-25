import { useEffect, useState } from "react";
import "./Search.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [SearchInput, setSearchInput] = useState("");
  const [itemsSearch, setSearch] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleDummyData = () => {
    const dummyData = {
      title: "Dummy Title",
      creator: "Dummy Creator",
      reviewAverage: 4.5,
      numberOfReviews: 10,
      details: "This is a dummy description for the media item.",
    };

    // Redirect to the Details page with dummy data
    navigate("/details", { state: dummyData });
  };

  return (
    <div className="core">
      <h1>Search</h1>
      <input onChange={(e) => setSearchInput(e.target.value)} />
      <button>GO</button>
      <button onClick={handleDummyData}>View Dummy Data</button>
      <h3>{message}</h3>
    </div>
  );
}
