import { Link } from 'react-router-dom';

const LevelBlock = ({ level }) => {
  return (
    <Link to={`/level/${level.index}`}>
      <div className='levelBlock'>
        <img alt='level' src={level.levelPicture} className='levelPicture' />
        <p className='levelText'>{level.name}</p>
      </div>
    </Link>
  );
}

export default LevelBlock;