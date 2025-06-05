import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Location = () => {
  var locations = require("../data/location.json");
  console.log(locations);
  const id = useParams();
  const [location, setLocation] = useState("");

  useEffect(() => {
    const location = locations.filter((item) => item.id === Number(id.id));
    setLocation(...location);
  }, [id, locations]);

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
