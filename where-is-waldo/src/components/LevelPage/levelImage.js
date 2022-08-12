const LevelImage = ({ src }) => {
  return (
    // <div id='levelImage'>
    <img className='levelImage' alt='level' src={src} draggable='false' />

    // </div>
  );
}

export default LevelImage;