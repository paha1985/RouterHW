import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetData } from "../hooks/use-get-data";

export const Location = () => {
  const id = useParams();
  // const [location, setLocation] = useState("");

  // const getLocation = async () => {
  //   const data = await fetch(
  //     `https://rickandmortyapi.com/api/location/${id.id}`
  //   );
  //   return data.json();
  // };

  // useEffect(() => {
  //   getLocation().then((d) => {
  //     setLocation(d);
  //   });
  // }, [id]);

  const { location, loading } = useGetData(
    `https://rickandmortyapi.com/api/episode`,
    null,
    id.id
  );

  return (
    <div>
      <table>
        <tr>
          <td>Название:</td>
          <td>{location.name}</td>
        </tr>
        <tr>
          <td>Тип:</td>
          <td>{location.type}</td>
        </tr>
        <tr>
          <td>Измерение:</td>
          <td>{location.dimension}</td>
        </tr>
        <tr>
          <td>Дата создания:</td>
          <td>{location.created}</td>
        </tr>
      </table>
    </div>
  );
};
