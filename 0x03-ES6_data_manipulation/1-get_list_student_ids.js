export default function getListStudentIds(array) {
  let arrId = [];

  if (array instanceof Array) {
    arrId = array.map((arr) => arr.id);
  }

  return arrId;
}
