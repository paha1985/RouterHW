import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Locations = () => {
  // var locations = require("../data/location.json");

  const [locations, setLocations] = useState([]);
  const getLocations = async () => {
    const data = await fetch(`https://rickandmortyapi.com/api/location`);
    return data.json();
  };

  useEffect(() => {
    getLocations().then((data) => setLocations(data.results));
  }, []);

  return (
    <table>
      {locations.map((location) => {
        return (
          <tr>
            <td key={location.id}>
              <Link to={`/locations/${location.id}`}>{location.name}</Link>
            </td>
          </tr>
        );
      })}
    </table>
  );
};
