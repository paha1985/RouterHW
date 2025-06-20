import { useParams } from "react-router-dom";
import { useGetData } from "../hooks/use-get-data";

export const Character = () => {
  const id = useParams();

  const { data, loading } = useGetData(
    `https://rickandmortyapi.com/api/character`,
    null,
    id.id
  );

  return (
    <div>
      <img src={data[0] ? data[0].image : null} alt="" />
      <table>
        <tr>
          <td>Название:</td>
          <td>{data[0] ? data[0].name : ""}</td>
        </tr>
        <tr>
          <td>Статус:</td>
          <td>{data[0] ? data[0].status : ""}</td>
        </tr>
        <tr>
          <td>Вид:</td>
          <td>{data[0] ? data[0].species : ""}</td>
        </tr>
        <tr>
          <td>Тип:</td>
          <td>{data[0] ? data[0].type : ""}</td>
        </tr>
        <tr>
          <td>Пол:</td>
          <td>{data[0] ? data[0].gender : ""}</td>
        </tr>
        <tr>
          <td>Дата создания:</td>
          <td>{data[0] ? data[0].created : ""}</td>
        </tr>
      </table>
    </div>
  );
};
