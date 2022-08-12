import { logRelCoord } from "../../functions/coords";

const LevelImage = ({ src }) => {
  return (
    <img className='levelImage' alt='level' src={src} draggable='false' onClick={logRelCoord} />
  );
}

export default LevelImage;