import db from './firebase-config';
import { doc, getDoc } from 'firebase/firestore';

const getCharacterCoord = async (levelIndex, characterIndex) => {
  const levelDoc = await getDoc(doc(db, `coords/level${levelIndex}`));
  const levelData = levelDoc.data();
  return (levelData[`character${characterIndex}`]);
}

export { getCharacterCoord };