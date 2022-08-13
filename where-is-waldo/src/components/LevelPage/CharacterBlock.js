import Cross from '../../assets/cross.svg';

const CharacterBlock = ({ character }) => {
  return (
    <div className='character'>
      {
        // if found, cross the character
        character.found ?
          <img alt='found' src={Cross} style={{ backgroundImage: `url(${character.src})` }} className='foundCharacter' draggable='false' />
          : <img alt={character.name} src={character.src} className="characterImage" draggable='false' />
      }
      <p className='characterName'>{character.name}</p>
    </div>
  );
}

export default CharacterBlock;