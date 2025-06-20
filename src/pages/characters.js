import { Link } from "react-router-dom";
import { useGetData } from "../hooks/use-get-data";

export const Characters = () => {
  const { data, loading } = useGetData(
    `https://rickandmortyapi.com/api/character`,
    null,
    null
  );

  return (
    <>
      <table>
        <tbody>
          {data.map((character) => {
            return (
              <tr key={character.id}>
                <td>
                  <Link to={`/characters/${character.id}`}>
                    {character.name}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {loading && <div className="loading">Loading...</div>}
    </>
  );
};
