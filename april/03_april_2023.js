/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  let count = 0;
  let n = people.length;
  let i = 0; 
  people.sort((a, b) => b - a);
  while (i < n) {
    if (people[i] + people[n - 1] <= limit) {
      n--;
    }
    i++;
    count++;
  }
  return count
};
