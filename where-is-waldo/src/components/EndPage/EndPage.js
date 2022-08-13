import '../../styles/EndPage.css';
import LeaderBoard from './LeaderBoard';
import NameInput from './NameInput';

const EndPage = ({ level, userId }) => {
  return (
    <div id='endPage'>
      <NameInput level={level} userId={userId} />
      <LeaderBoard />
    </div>
  );
}

export default EndPage;