function roundToPlaces(num, place) {
  return Math.round(num * 10 ** place) / 10 ** place;
}


function logRelCoord(e) {
  let rect = e.target.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;
  let x = e.clientX - rect.left; //x position within the element.
  let y = e.clientY - rect.top;  //y position within the element.
  const relX = roundToPlaces(x / width, 2);
  const relY = roundToPlaces(y / height, 2);

  console.log("Left? : " + relX + " ; Top? : " + relY + ".");
  return [relX, relY];
}

export { logRelCoord }