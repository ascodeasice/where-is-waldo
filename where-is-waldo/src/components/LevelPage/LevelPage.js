import '../../styles/LevelPage.css';
import CharacterContainer from './CharacterContainer';
import LevelImage from './levelImage';
import { useEffect } from 'react';

const LevelPage = ({ level }) => {
  // scroll to top when component mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id='levelPage'>
      <CharacterContainer characters={level.characters} />
      <LevelImage src={level.levelPicture} />
    </div>
  );
}

export default LevelPage;