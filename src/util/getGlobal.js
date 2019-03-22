const g = new Function('return this')();

export default function() {
  return g;
}
