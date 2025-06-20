import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const getCharacters = async () => {
    const data = await fetch(`https://rickandmortyapi.com/api/character`);
    return data.json();
  };

  useEffect(() => {
    getCharacters().then((data) => setCharacters(data.results));
  }, []);

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
