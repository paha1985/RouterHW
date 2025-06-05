import { Link } from "react-router-dom";

export const Episodes = () => {
  var episodes = require("../data/episode.json");
  return (
    <table>
      {episodes.map((episode) => {
        return (
          <tr>
            <td key={episode.id}>
              <Link to={`/episodes/${episode.id}`}>{episode.name}</Link>
            </td>
          </tr>
        );
      })}
    </table>
  );
};
