import { getCharacterCoord } from "../../firebase-modules/coordData";
import { inRange } from "../../functions/coords";

const SelectBox = ({ levelIndex, characters, setLevels, chosenCoord }) => {
  const chooseCharacter = async (e, characterIndex) => {
    const characterCoord = await getCharacterCoord(levelIndex, characterIndex);
    if (inRange(chosenCoord, characterCoord)) {
      console.log('found');
    } else {
      console.log('not found');
    }
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