import { getRelCoord } from "../../functions/coords";

const LevelImage = ({ src, setChosenCoord }) => {
  // show SelectBox at where mouse clicked
  const showSelectBox = (e) => {
    const box = document.getElementById('selectBox');
    box.style.left = `${e.pageX}px`;
    box.style.top = `${e.pageY}px`;
    box.style.visibility = 'visible';
    setChosenCoord(getRelCoord(e));
  }

  return (
    <img className='levelImage' alt='level' src={src} draggable='false' onClick={(e) => {
      showSelectBox(e);
    }} />
  );
}

export default LevelImage;