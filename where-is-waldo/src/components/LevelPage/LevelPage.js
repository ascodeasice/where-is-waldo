import '../../styles/LevelPage.css';
import CharacterContainer from './CharacterContainer';
import LevelImage from './levelImage';
import SelectBox from './SelectBox';
import { useEffect, useState } from 'react';

const LevelPage = ({ levels, level, setLevels }) => {
  const [chosenCoord, setChosenCoord] = useState([-1, -1]);

  // scroll to top when component mounted
  useEffect(() => {
    window.scrollTo(0, 0);
    // TODO add startTime time stamp
  }, []);

  // TODO add timer on top

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