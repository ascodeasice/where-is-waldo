function roundToPlaces(num, place) {
  return Math.round(num * 10 ** place) / 10 ** place;
}

function getRelCoord(e) {
  let rect = e.target.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;
  let x = e.clientX - rect.left; //x position within the element.
  let y = e.clientY - rect.top;  //y position within the element.
  const relX = roundToPlaces(x / width, 2);
  const relY = roundToPlaces(y / height, 2);

  return [relX, relY];
}

function inRange(e, characterCoord) {
  const relCoord = getRelCoord(e);
  const precision = 0.02;
  for (let i = 0; i <= 1; i++) {
    if (relCoord[i] - precision > characterCoord[i]) {
      return false;
    }
  }

  for (let i = 0; i <= 1; i++) {
    if (relCoord[i] + precision < characterCoord[i]) {
      return false;
    }
  }

  return true
}


export { getRelCoord, inRange }