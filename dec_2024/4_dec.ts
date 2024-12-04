function canMakeSubsequence(str1: string, str2: string): boolean {
  let n: number = str1.length;
  let m: number = str2.length;
  let i: number = 0;
  let j: number = 0;
  while (i < n && j < m) {
    if (
      str1.charAt(i) === str2.charAt(j) ||
      str1.charCodeAt(i) === str2.charCodeAt(j) - 1 ||
      (str1.charAt(i) === "z" && str2.charAt(j) === "a")
    ) {
      j++;
    }
    i++;
  }
  return j === m;
}
