export function sentenceCase(string) {
  const stringArr = string.split("");

  return stringArr
    .map((char, idx) => {
      if (idx === 0) {
        return char.toUpperCase();
      }
      return char;
    })
    .join("");
}
