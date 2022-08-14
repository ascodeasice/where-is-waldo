import '../../styles/EndPage.css';
import LeaderBoard from './LeaderBoard';
import NameInput from './NameInput';
import { useState, useEffect } from 'react';
import { getLeaderBoardCollection } from '../../firebase-modules/leaderboard';

const EndPage = ({ level, userId }) => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async (level) => {
    const docs = await getLeaderBoardCollection(level.index);
    setUsers(docs);
  }

  useEffect(() => {
    fetchUsers(level);
  }, []);

  return (
    <div id='endPage'>
      <NameInput level={level} userId={userId} fetchUsers={fetchUsers} />
      <LeaderBoard level={level} users={users} />
    </div>
  );
}

export default EndPage;