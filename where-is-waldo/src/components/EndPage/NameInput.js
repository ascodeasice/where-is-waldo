import { useState, useEffect } from "react";
import { getUserDoc, updateName } from "../../firebase-modules/leaderboard";
import { formatSeconds } from "../../functions/format";

const NameInput = ({ level, userId, showNameInput }) => {
  const [doc, setDoc] = useState(null);
  const [inputValue, setInputValue] = useState('anonymous');
  const [display, setDisplay] = useState('block');

  useEffect(() => {
    const prepareDoc = async () => {
      const data = await getUserDoc(userId, level.index);
      setDoc(data);
    }
    prepareDoc();
    setDisplay('');
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const submitName = () => {
    updateName(userId, level.index, inputValue);
    setDisplay('none');
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      submitName();
    }
  }

  return (
    <div id='nameInput' style={{ display: display }}>
      <p>You finished {level.name} level in {!doc || !doc.startTime || !doc.endTime ? 'loading...' :
        formatSeconds(doc.endTime.seconds - doc.startTime.seconds)},
        input your name to record your score.</p>
      <input type='text' placeholder="anonymous" onChange={handleChange} onKeyDown={handleKeyDown} />
      <button onClick={submitName}>Sumbit</button>
    </div>
  );
}

export default NameInput;