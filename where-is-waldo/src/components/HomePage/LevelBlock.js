import { Link } from 'react-router-dom';

const LevelBlock = ({ id }) => {
  return (
    <div className='levelBlock'>
      <Link to={`/${id}`}>
        {/* TODO level picture and level name */}
      </Link>
    </div>
  );
}

export default LevelBlock;