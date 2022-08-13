const padNum = (num, padLen) => {
  if (num < 10 ** padLen) {
    return (`${'0' * padLen}${num}`).slice(-padLen - 1);
  } else {
    return String(num);
  }
}

export { padNum };