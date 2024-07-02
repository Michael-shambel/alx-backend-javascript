export default function cleanSet(set, startString) {
  if (!startString || typeof startString != 'string') {
    return '';
  }
  let value = [];

  for (const element of set) {
    if (element.startsWith(startString)) {
      value.push(element.slice(startString.length));
    }
  }
  return value.join('-');
}
