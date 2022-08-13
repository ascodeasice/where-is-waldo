const NameInput = ({ level, dataId }) => {
  return (
    <div id='nameInput'>
      <p>You finished {level.name} level in //(use function to get time), input your name to record your score.</p>
      <input type='text' placeholder="anonymous" />
      <button >Sumbit</button>
      {/* TODO edit name to DB */}
    </div>
  );
}

export default NameInput;