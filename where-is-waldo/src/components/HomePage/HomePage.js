import '../../styles/HomePage.css';
import LevelBlock from './LevelBlock';

const HomePage = ({ levels }) => {
  return (
    <div id='homePage'>
      {
        levels.map((level, i) => (
          <LevelBlock key={i} level={level} />
        ))
      }
    </div>
  );
}

export default HomePage;