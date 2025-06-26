import { Link } from "react-router-dom";
import { useState } from "react";
import { useGetData, useLoadNextPage } from "../../hooks";

export const Characters = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, loading, hasMore } = useGetData(
    `https://rickandmortyapi.com/api/character`,
    pageNumber,
    null
  );

  const lastNodeRef = useLoadNextPage(loading, hasMore, setPageNumber);

  return (
    <>
      <table>
        <tbody>
          {data.map((character, index) => {
            if (data.length === index + 1) {
              return (
                <tr key={character.id} ref={lastNodeRef}>
                  <td>
                    <Link to={`/characters/${character.id}`}>
                      {character.name}
                    </Link>
                  </td>
                </tr>
              );
            } else {
              return (
                <tr key={character.id}>
                  <td>
                    <Link to={`/characters/${character.id}`}>
                      {character.name}
                    </Link>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      {loading && <div className="loading">Loading...</div>}
    </>
  );
};
