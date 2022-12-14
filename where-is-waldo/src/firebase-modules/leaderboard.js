import { addDoc, updateDoc, doc, collection, serverTimestamp, getDoc, getDocs } from 'firebase/firestore';
import db from './firebase-config';

// add time stamp of current time to db
// return doc id
const addStartTime = async (levelIndex) => {
  const docRef = await addDoc(collection(db, `leaderboard/level${levelIndex}/players`), {
    startTime: serverTimestamp()
  });

  return docRef.id;
}

const addEndTime = async (userId, levelIndex) => {
  await updateDoc(doc(db, `leaderboard/level${levelIndex}/players/${userId}`), {
    endTime: serverTimestamp()
  });
}

const getUserDoc = async (userId, levelIndex) => {
  const docRef = await getDoc(doc(db, `leaderboard/level${levelIndex}/players/${userId}`));
  return docRef.data();
}

const updateName = async (userId, levelIndex, name) => {
  if (userId === 'none') {
    return;
  }
  await updateDoc(doc(db, `leaderboard/level${levelIndex}/players/${userId}`), {
    name: name
  });
}

const getSecondsPast = (doc) => {
  return doc && doc.startTime && doc.endTime ? doc.endTime.seconds - doc.startTime.seconds : 'loading...';
}

const getLeaderBoardCollection = async (levelIndex) => {
  const snapShot = await getDocs(collection(db, `leaderboard/level${levelIndex}/players`));
  return snapShot.docs;
}

export { addStartTime, addEndTime, getUserDoc, updateName, getSecondsPast, getLeaderBoardCollection };