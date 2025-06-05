import { Link } from "react-router-dom";

export const Locations = () => {
  var locations = require("../data/location.json");
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
