import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [contries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);

  const HandleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const HandleVisitedFlag = (flag) => {
    const newVisitedFlag = [...visitedFlag, flag];
    setVisitedFlag(newVisitedFlag);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h2>All Country : {contries.length} </h2>
      <h3>Country Visited : {visitedCountries.length}</h3>
      <ul>
        {visitedCountries.map((country, e) => (
          <li key={e}>{country.name.common} </li>
        ))}
      </ul>

      <div className="image-container">
        {visitedFlag.map((flag, i) => (
          <img src={flag} key={i}></img>
        ))}
      </div>

      <div className="country-container">
        {contries.map((country) => (
          <Country
            country={country}
            key={country.cca3}
            HandleVisitedCountries={HandleVisitedCountries}
            HandleVisitedFlag={HandleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
