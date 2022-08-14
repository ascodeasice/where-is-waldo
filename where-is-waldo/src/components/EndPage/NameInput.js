import { useState, useEffect } from "react";
import { getUserDoc, updateName, getSecondsPast } from "../../firebase-modules/leaderboard";
import { formatSeconds } from "../../functions/format";

const NameInput = ({ level, userId, fetchUsers }) => {
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
    fetchUsers(level);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      submitName();
    }
  }

  return (
    <div id='nameInput' style={{ display: display }}>
      <p>You finished {level.name} level in {formatSeconds(getSecondsPast(doc))},
        input your name to record your score.</p>
      <input type='text' placeholder="anonymous" onChange={handleChange} onKeyDown={handleKeyDown} />
      <button onClick={submitName}>Sumbit</button>
    </div>
  );
}

export default NameInput;