function addSpaces(s: string, spaces: number[]): string {
  const result:String[]=[];
  let startIndex=0;
  for(const space of spaces){
    result.push(s.substring(startIndex,space))
    result.push(" ")
    startIndex=space;
  }
  result.push(s.substring(startIndex))
    return result.join("")
};
