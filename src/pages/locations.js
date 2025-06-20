import { Link } from "react-router-dom";
import { useGetData } from "../hooks/use-get-data";

export const Locations = () => {
  const { data, loading } = useGetData(
    `https://rickandmortyapi.com/api/location`,
    null,
    null
  );

  return (
    <>
      <table>
        <tbody>
          {data.map((location) => {
            return (
              <tr key={location.id}>
                <td>
                  <Link to={`/locations/${location.id}`}>{location.name}</Link>
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
