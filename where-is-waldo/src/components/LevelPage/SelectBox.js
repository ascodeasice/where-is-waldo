import { getCharacterCoord } from "../../firebase-modules/coordData";

const SelectBox = ({ levelIndex, characters, setLevels }) => {
  const chooseCharacter = (e, characterIndex) => {
    const characterCoord = getCharacterCoord(levelIndex, characterIndex);
    // if(inRange(e,characterCoord)){ //set character to found }
  }

  return (
    <div id='selectBox'>
      {
        characters.map((character, i) => {
          if (character.found) {
            // eslint-disable-next-line array-callback-return
            return;
          } else {
            return <p key={i} onClick={(e) => chooseCharacter(e, i)}>{character.name}</p>
          }
        })
      }
    </div>
  );
}

export default SelectBox;