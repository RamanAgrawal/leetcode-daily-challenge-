/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
  let ans=1;
  let str=0;
  let countobj={}
  while(str<s.length){
      let ch=s[str]
      if(ch in countobj){
          countobj={}
          ans++
      }
      countobj[ch]=1
      str++
  }  
  return ans
};
