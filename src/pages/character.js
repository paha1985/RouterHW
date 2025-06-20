import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Character = () => {
  const id = useParams();
  const [character, setCharacter] = useState("");

  const getCharacter = async () => {
    const data = await fetch(
      `https://rickandmortyapi.com/api/character/${id.id}`
    );
    return data.json();
  };

  useEffect(() => {
    getCharacter().then((d) => {
      setCharacter(d);
    });
  }, [id]);

  return (
    <div>
      <img src={character.image} alt="" />
      <table>
        <tr>
          <td>Название:</td>
          <td>{character.name}</td>
        </tr>
        <tr>
          <td>Статус:</td>
          <td>{character.status}</td>
        </tr>
        <tr>
          <td>Вид:</td>
          <td>{character.species}</td>
        </tr>
        <tr>
          <td>Тип:</td>
          <td>{character.type}</td>
        </tr>
        <tr>
          <td>Пол:</td>
          <td>{character.gender}</td>
        </tr>
        <tr>
          <td>Дата создания:</td>
          <td>{character.created}</td>
        </tr>
      </table>
    </div>
  );
};
