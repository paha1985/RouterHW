import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetData } from "../hooks/use-get-data";

export const Episode = () => {
  const id = useParams();
  // const [episode, setEpisode] = useState("");

  // const getEpisode = async () => {
  //   const data = await fetch(
  //     `https://rickandmortyapi.com/api/episode/${id.id}`
  //   );
  //   return data.json();
  // };

  // useEffect(() => {
  //   getEpisode().then((d) => {
  //     setEpisode(d);
  //   });
  // }, [id]);

  const { episode, loading } = useGetData(
    `https://rickandmortyapi.com/api/episode`,
    null,
    id.id
  );

  return (
    <div>
      <table>
        <tr>
          <td>Название:</td>
          <td>{episode[0] ? episode[0].name : ""}</td>
        </tr>
        <tr>
          <td>Тип:</td>
          <td>{episode[0] ? episode[0].air_date : ""}</td>
        </tr>
        <tr>
          <td>Измерение:</td>
          <td>{episode[0] ? episode[0].episode : ""}</td>
        </tr>
        <tr>
          <td>Дата создания:</td>
          <td>{episode[0] ? episode[0].created : ""}</td>
        </tr>
      </table>
    </div>
  );
};
