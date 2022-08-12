import CharacterBlock from "./CharacterBlock";

const CharacterContainer = ({ characters }) => {
  return (
    <div className='characterContainer'>
      <h1 className='characterText'>Find:</h1>
      {
        characters.filter(character => !character.found)
          .map((character, i) =>
            <CharacterBlock key={i} character={character} />
          )
      }
    </div>
  );
}

export default CharacterContainer;