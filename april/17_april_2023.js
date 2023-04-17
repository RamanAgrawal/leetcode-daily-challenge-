/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
   let result = [];
  for (let i = 0; i < candies.length; i++) {
      candies[i] + extraCandies >= Math.max(...candies)? result.push(true) : result.push(false)
  }
  return result
};
