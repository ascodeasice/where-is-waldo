import '../../styles/EndPage.css';
import LeaderBoard from './LeaderBoard';
import NameInput from './NameInput';

const EndPage = ({ level }) => {
  return (
    <div id='endPage'>
      <NameInput level={level} />
      <LeaderBoard />
    </div>
  );
}

export default EndPage;