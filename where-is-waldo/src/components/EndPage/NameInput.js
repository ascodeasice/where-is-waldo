import { useState, useEffect } from "react";
import { getUserDoc } from "../../firebase-modules/leaderboard";
import { formatSeconds } from "../../functions/format";

const NameInput = ({ level, userId }) => {
  const [doc, setDoc] = useState(null);

  useEffect(() => {
    const prepareDoc = async () => {
      const data = await getUserDoc(userId, level.index);
      setDoc(data);
    }
    prepareDoc();
  }, []);

  return (
    <div id='nameInput'>
      <p>You finished {level.name} level in {doc === null ? 'loading...' :
        formatSeconds(doc.endTime.seconds - doc.startTime.seconds)},
        input your name to record your score.</p>
      <input type='text' placeholder="anonymous" />
      <button >Sumbit</button>
      {/* TODO edit name to DB */}
    </div>
  );
}

export default NameInput;