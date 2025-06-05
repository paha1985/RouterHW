import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Episode = () => {
  var episodes = require("../data/episode.json");
  const id = useParams();
  const [episode, setEpisode] = useState("");

  useEffect(() => {
    const episode = episodes.filter((item) => item.id === Number(id.id));
    setEpisode(...episode);
  }, [id, episodes]);

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
