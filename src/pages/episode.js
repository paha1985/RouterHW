import { useParams } from "react-router-dom";
import { useGetData } from "../hooks/use-get-data";

export const Episode = () => {
  const id = useParams();

  const { data } = useGetData(
    `https://rickandmortyapi.com/api/episode`,
    null,
    id.id
  );

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Название:</td>
            <td>{data[0] ? data[0].name : ""}</td>
          </tr>
          <tr>
            <td>Тип:</td>
            <td>{data[0] ? data[0].air_date : ""}</td>
          </tr>
          <tr>
            <td>Измерение:</td>
            <td>{data[0] ? data[0].episode : ""}</td>
          </tr>
          <tr>
            <td>Дата создания:</td>
            <td>{data[0] ? data[0].created : ""}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
