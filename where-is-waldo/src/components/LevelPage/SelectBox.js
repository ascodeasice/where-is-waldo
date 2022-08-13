import { getCharacterCoord } from "../../firebase-modules/coordData";
import { inRange } from "../../functions/coords";
import { useNavigate } from 'react-router-dom';

const SelectBox = ({ levels, levelIndex, characters, setLevels, chosenCoord }) => {
  let navigate = useNavigate();

  const chooseCharacter = async (characterIndex) => {
    const characterCoord = await getCharacterCoord(levelIndex, characterIndex);
    if (inRange(chosenCoord, characterCoord)) {
      // update character
      let levelsCopy = structuredClone(levels);
      levelsCopy[levelIndex].characters[characterIndex].found = true;
      setLevels(levelsCopy);

      // game over
      let charactersCopy = structuredClone(characters);
      charactersCopy[characterIndex].found = true;
      if (charactersCopy.every(character => character.found)) {
        levelsCopy[levelIndex].characters.forEach(character => character.found = false);
        setLevels(levelsCopy);
        navigate(`/end/${levelIndex}`);
        // TODO add endTime time stamp
        // TODO go to endPage
        ;
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    //hide selectBox
    document.getElementById('selectBox').style.visibility = 'hidden';
  }

  return (
    <div id='selectBox'>
      {
        characters.map((character, i) => {
          if (character.found) {
            return "";
          } else {
            return <p key={i} onClick={() => chooseCharacter(i)}>{character.name}</p>
          }
        })
      }
    </div>
  );
}


export default SelectBox;
