const CharacterBlock = ({ character }) => {
  return (
    <div className='character'>
      <img alt={character.name} src={character.src} className="characterImage" draggable='false' />
      <p className='characterName'>{character.name}</p>
    </div>
  );
}

export default CharacterBlock;