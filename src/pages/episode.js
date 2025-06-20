import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Episode = () => {
  const id = useParams();
  const [episode, setEpisode] = useState("");

  const getEpisode = async () => {
    const data = await fetch(
      `https://rickandmortyapi.com/api/episode/${id.id}`
    );
    return data.json();
  };

  useEffect(() => {
    getEpisode().then((d) => {
      setEpisode(d);
    });
  }, [id]);

  return (
    <div>
      <table>
        <tr>
          <td>Название:</td>
          <td>{episode.name}</td>
        </tr>
        <tr>
          <td>Тип:</td>
          <td>{episode.air_date}</td>
        </tr>
        <tr>
          <td>Измерение:</td>
          <td>{episode.episode}</td>
        </tr>
        <tr>
          <td>Дата создания:</td>
          <td>{episode.created}</td>
        </tr>
      </table>
    </div>
  );
};
