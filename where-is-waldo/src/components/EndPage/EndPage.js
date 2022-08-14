import '../../styles/EndPage.css';
import LeaderBoard from './LeaderBoard';
import NameInput from './NameInput';
import { useState, useEffect } from 'react';
import { getLeaderBoardCollection, getSecondsPast } from '../../firebase-modules/leaderboard';

const EndPage = ({ level, userId }) => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async (level) => {
    let docs = await getLeaderBoardCollection(level.index);
    // filter invalid player(quit in the middle/ through invalid path)
    docs = docs.filter(doc => doc.data().startTime && doc.data().endTime);
    docs.sort((a, b) => getSecondsPast(a.data()) - getSecondsPast(b.data()))
    setUsers(docs);
  }

  useEffect(() => {
    fetchUsers(level);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id='endPage'>
      <NameInput level={level} userId={userId} fetchUsers={fetchUsers} />
      <LeaderBoard level={level} users={users} />
    </div>
  );
}

export default EndPage;