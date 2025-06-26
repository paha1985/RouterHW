import { Link } from "react-router-dom";
import { useState } from "react";
import { useGetData, useLoadNextPage } from "../../hooks";


export const Episodes = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { data, loading, hasMore } = useGetData(
    `https://rickandmortyapi.com/api/episode`,
    pageNumber,
    null
  );

  const lastNodeRef = useLoadNextPage(loading, hasMore, setPageNumber);

  return (
    <>
      <table>
        <tbody>
          {data.map((episode, index) => {
            if (data.length === index + 1) {
              return (
                <tr key={episode.id} ref={lastNodeRef}>
                  <td>
                    <Link to={`/episodes/${episode.id}`}>{episode.name}</Link>
                  </td>
                </tr>
              );
            } else {
              return (
                <tr key={episode.id}>
                  <td>
                    <Link to={`/episodes/${episode.id}`}>{episode.name}</Link>
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
