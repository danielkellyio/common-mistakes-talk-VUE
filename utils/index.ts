export function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function addLeadingZeros(number: number | string, width = 3) {
  return number.toString().padStart(width, "0");
}
