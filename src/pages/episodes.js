import { Link } from "react-router-dom";
import { useGetData } from "../hooks/use-get-data";

export const Episodes = () => {
  const { data, loading } = useGetData(
    `https://rickandmortyapi.com/api/episode`,
    null,
    null
  );

  return (
    <>
      <table>
        <tbody>
          {data.map((episode) => {
            return (
              <tr key={episode.id}>
                <td>
                  <Link to={`/episodes/${episode.id}`}>{episode.name}</Link>
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
