import CharacterBlock from "./CharacterBlock";
import Timer from "./Timer";

const CharacterContainer = ({ characters }) => {
  return (
    <div className='characterContainer'>
      <h1 className='characterText'>Find:</h1>
      {
        characters.map((character, i) =>
          <CharacterBlock key={i} character={character} />
        )
      }
      <Timer />
    </div>
  );
}

export default CharacterContainer;