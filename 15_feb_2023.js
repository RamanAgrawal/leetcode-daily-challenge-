 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
   const x =  BigInt(num.join("")) + BigInt(k);
    return  x.toString().split("").map((item)=>parseInt(item));
};
