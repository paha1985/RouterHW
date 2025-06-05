export const Episodes = () => {
  var episodes = require("../data/episode.json");
  return (
    <table>
      {episodes.map((episode) => {
        return (
          <tr>
            <td key={episode.id}>{episode.name}</td>
          </tr>
        );
      })}
    </table>
  );
};
