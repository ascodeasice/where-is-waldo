import '../../styles/LevelPage.css';
import CharacterContainer from './CharacterContainer';
import LevelImage from './levelImage';
import SelectBox from './SelectBox';
import { useEffect, useState } from 'react';
import { addStartTime } from '../../firebase-modules/leaderboard';

const LevelPage = ({ levels, level, setLevels, setUserId, userId }) => {
  const [chosenCoord, setChosenCoord] = useState([-1, -1]);

  useEffect(() => {
    // scroll to top when component mounted
    window.scrollTo(0, 0);

    let levelsClone = structuredClone(levels);
    levelsClone[level.index].characters.forEach(character => character.found = false);
    setLevels(levelsClone);

    const recordUserInfo = async () => {
      const userId = await addStartTime(level.index);
      setUserId(userId);
    }

    recordUserInfo();
  }, []);

  return (
    <div id='levelPage'>
      <CharacterContainer characters={level.characters} />
      <LevelImage src={level.levelPicture} setChosenCoord={setChosenCoord} />
      <SelectBox levelIndex={level.index} characters={level.characters}
        setLevels={setLevels} chosenCoord={chosenCoord} levels={levels}
        userId={userId} />
    </div>
  );
}

export default LevelPage;