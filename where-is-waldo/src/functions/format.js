const padNum = (num, padLen) => {
  if (num < 10 ** padLen) {
    return (`${'0' * padLen}${num}`).slice(-padLen - 1);
  } else {
    return String(num);
  }
}

const formatSeconds = (seconds) => {
  return `${padNum(Math.floor(seconds / 60), 1)}:${padNum(seconds % 60, 1)}`;
}

export { padNum, formatSeconds };