export const Characters = () => {
  var characters = require("../data/characters.json");
  return (
    <table>
      {characters.map((character) => {
        return (
          <tr>
            <td key={character.id}>{character.name}</td>
          </tr>
        );
      })}
    </table>
  );
};
