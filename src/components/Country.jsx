import { useState } from "react";
import "./Country.css";
const Country = ({ country, HandleVisitedCountries, HandleVisitedFlag }) => {
  const { name, flags, region, area } = country;
  //   console.log(country);

  const [visited, setVisited] = useState(false);

  const HandleClick = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country  ${visited && "visited"}`}>
      <h3 style={{ color: visited ? "black" : "white" }}> {name.common} </h3>
      <img src={flags.png} alt="" />
      <h3> {region} </h3>
      <h3> area : {area} </h3>
      <button onClick={HandleClick}>{visited ? "visited" : "Going"}</button>
      <br />

      <button onClick={() => HandleVisitedCountries(country)}>
        Mark visited
      </button>
      <br />
      <button onClick={() => HandleVisitedFlag(country.flags.png)}>Flag</button>
      {visited ? "I wanted this country " : "I want to visited"}
    </div>
  );
};

export default Country;
