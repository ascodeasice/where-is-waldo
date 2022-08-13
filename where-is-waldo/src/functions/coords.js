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

function inRange(chosenCoord, characterCoord) {
  const precision = 0.04;

  return (Math.abs(chosenCoord[0] - characterCoord[0]) <= precision
    && Math.abs(chosenCoord[1] - characterCoord[1]) <= precision);
}


export { getRelCoord, inRange }