import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const getEpisodes = async () => {
    const data = await fetch(`https://rickandmortyapi.com/api/episode`);
    return data.json();
  };

  useEffect(() => {
    getEpisodes().then((data) => setEpisodes(data.results));
  }, []);

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
