/** Big O - Time Complexity (JS)
 * Ex1 - O(n)
 * Ex2 - O(log(n)) - i jumps in loop with multiple, like binary search
 * Ex3 - O(4) => O(1)
 * Ex4 - studentGithubs.forEach => O(n)
 *       Object.keys(answers).forEach => O(m) - different source => together O(mn)
 * Ex5 - O(n) => number of recepients
 *
 */

// Algorithms (JS)

//Ex1
const printStars = function (num) {
  let star = "";
  for (let i = 0; i < num; i++) {
    for (let x = 0; x <= i; x++) {
      star += "*";
    }
    console.log(star);
    star = "";
  }
};

//Ex2
const printBackwardsStars = function (num1) {
starBack = "";
for (let j = num1; j > 0; j--) {
    for (let y = j-1; y >= 0; y--) {
        starBack += "*";
      }
      console.log(starBack);
      starBack = "";
    }
};

//Ex3
const printStarSeries = function (num2, count) {
  for (let k = 0; k < count; k++) {
    printStars(num2);
    printBackwardsStars(num2 - 1);
  }
};

printStarSeries(5, 3)
