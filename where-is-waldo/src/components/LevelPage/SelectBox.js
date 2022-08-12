const SelectBox = ({ characters }) => {
  return (
    <div id='selectBox'>
      {
        characters.filter(character => !character.found)
          .map((character, i) => <p key={i} >{character.name}</p>)
      }
    </div>
  );
}

export default SelectBox;