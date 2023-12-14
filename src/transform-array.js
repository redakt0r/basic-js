const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');

  const resultArr = [];
  let isDiscarded = false;

  for (let i = 0; i < arr.length; i++) {
    if (isDiscarded) {
      isDiscarded = false;
      continue;
    }

    switch (arr[i]) {      
      case '--discard-next':
        isDiscarded = true;
        i++;
        break;        
      case '--discard-prev':
        if (resultArr.length > 0 && !isDiscarded) {
          resultArr.pop();
          break;
        }
        break;
      case '--double-next':
        if (arr[i + 1] && !isDiscarded) {
          resultArr.push(arr[i + 1]);
          break;
        }
        break;
      case '--double-prev':
        if (resultArr.length > 0 && !isDiscarded) {
          resultArr.push(resultArr[resultArr.length - 1]);
          break;
        }
        break;
      default:
          resultArr.push(arr[i]);
    }
  }
  resultArr.filter(element => element !== undefined);
  return resultArr;
}

module.exports = {
  transform
};
