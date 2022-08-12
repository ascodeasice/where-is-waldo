import '../../styles/LevelPage.css';
import CharacterContainer from './CharacterContainer';
import LevelImage from './levelImage';
import SelectBox from './SelectBox';
import { useEffect } from 'react';

const LevelPage = ({ level, setLevels }) => {
  // scroll to top when component mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id='levelPage'>
      <CharacterContainer characters={level.characters} />
      <LevelImage src={level.levelPicture} />
      <SelectBox levelIndex={level.index} characters={level.characters} setLevels={setLevels} />
    </div>
  );
}

export default LevelPage;