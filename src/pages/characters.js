import { Link } from "react-router-dom";

export const Characters = () => {
  var characters = require("../data/characters.json");
  return (
    <table>
      {characters.map((character) => {
        return (
          <tr>
            <td key={character.id}>
              <Link to={`/characters/${character.id}`}>{character.name}</Link>
            </td>
          </tr>
        );
      })}
    </table>
  );
};
