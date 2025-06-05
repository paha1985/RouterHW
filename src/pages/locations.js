export const Locations = () => {
  var locations = require("../data/location.json");
  return (
    <table>
      {locations.map((location) => {
        return (
          <tr>
            <td key={location.id}>{location.name}</td>
          </tr>
        );
      })}
    </table>
  );
};
