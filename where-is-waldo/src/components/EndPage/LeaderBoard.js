import { getSecondsPast } from "../../firebase-modules/leaderboard";
import { formatSeconds } from "../../functions/format";
import Github from '../../assets/github.svg';

const LeaderBoard = ({ level, users }) => {
  return (
    <div id='leaderBoard'>
      <h1 id='levelName'>{level.name}</h1>
      {
        users.map((doc, i) =>
          doc.data().startTime && doc.data().endTime ?
            <div key={`player${i}`} className="playerInfo">
              <p key={`order${i}`} className='playerOrder'>{i + 1}.</p>
              <p key={`name${i}`} className="playerName">{doc.data().name ? doc.data().name : 'anonymous'}</p>
              <p key={`time${i}`} className='playerTime'>{formatSeconds(getSecondsPast(doc.data()))}</p>
            </div>
            : ''
        )
      }
      <a id='githubLink' href='https://github.com/ascodeasice/where-is-waldo'>
        <img id='githubIcon' src={Github} alt='' />
        <h1 id='githubText'>Check Github</h1>
      </a>
    </div>
  );
}

export default LeaderBoard;