import { addDoc, updateDoc, doc, collection, serverTimestamp } from 'firebase/firestore';
import db from './firebase-config';

// add time stamp of current time to db
// return doc id
const addStartTime = async (levelIndex) => {
  const docRef = await addDoc(collection(db, `leaderboard/level${levelIndex}/players`), {
    startTime: serverTimestamp()
  });

  return docRef.id;
}

const addEndTime = (docId, levelIndex) => {
  updateDoc(doc(db, `leaderboard/level${levelIndex}/players${docId}`), {
    endTime: serverTimestamp()
  });
}

export { addStartTime };