import { Link } from "react-router-dom";
import { useGetData } from "../../hooks/use-get-data";
import { useState } from "react";
import { useLoadNextPage } from "../../hooks/use-load-next-page";


export const Locations = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { data, loading, hasMore } = useGetData(
    `https://rickandmortyapi.com/api/location`,
    pageNumber,
    null
  );

  const lastNodeRef = useLoadNextPage(loading, hasMore, setPageNumber);

  return (
    <>
      <table>
        <tbody>
          {data.map((location, index) => {
            if (data.length === index + 1) {
              return (
                <tr key={location.id} ref={lastNodeRef}>
                  <td>
                    <Link to={`/locations/${location.id}`}>
                      {location.name}
                    </Link>
                  </td>
                </tr>
              );
            } else {
              return (
                <tr key={location.id}>
                  <td>
                    <Link to={`/locations/${location.id}`}>
                      {location.name}
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
