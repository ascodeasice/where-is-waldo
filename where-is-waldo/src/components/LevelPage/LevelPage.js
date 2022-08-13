import '../../styles/LevelPage.css';
import CharacterContainer from './CharacterContainer';
import LevelImage from './levelImage';
import SelectBox from './SelectBox';
import { useEffect, useState } from 'react';
import { addStartTime } from '../../firebase-modules/leaderboard';

const LevelPage = ({ levels, level, setLevels, setUserId }) => {
  const [chosenCoord, setChosenCoord] = useState([-1, -1]);

  useEffect(() => {
    // scroll to top when component mounted
    window.scrollTo(0, 0);

    let levelsClone = structuredClone(levels);
    levelsClone[level.index].characters.forEach(character => character.found = false);
    setLevels(levelsClone);

    const userId = async () => await addStartTime(level.index);
    setUserId(userId);
  }, []);

  return (
    <div id='levelPage'>
      <CharacterContainer characters={level.characters} />
      <LevelImage src={level.levelPicture} setChosenCoord={setChosenCoord} />
      <SelectBox levelIndex={level.index} characters={level.characters}
        setLevels={setLevels} chosenCoord={chosenCoord} levels={levels} />
    </div>
  );
}

export default LevelPage;