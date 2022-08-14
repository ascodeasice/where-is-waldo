import { getSecondsPast } from "../../firebase-modules/leaderboard";
import { formatSeconds } from "../../functions/format";

const LeaderBoard = ({ level, users }) => {
  return (
    <div id='leaderBoard'>
      <h1 id='levelName'>{level.name}</h1>
      {
        users.map((doc, i) =>
          <div key={`player${i}`} className="playerInfo">
            <p key={`order${i}`} className='playerOrder'>{i + 1}.</p>
            <p key={`name${i}`} className="playerName">{doc.data().name ? doc.data().name : 'anonymous'}</p>
            <p key={`time${i}`} className='playerTime'>{formatSeconds(getSecondsPast(doc.data()))}</p>
          </div>
        )
      }
    </div>
  );
}

export default LeaderBoard;