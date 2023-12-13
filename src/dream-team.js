const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(/* members */) {
  throw new NotImplementedError('Not implemented');
/*   if (!Array.isArray(members)) return false;
  let dreamTeamName = [];
  
  function checkIsString(item) {
    return typeof item === 'string' ? true : false;
  }
  function pickFirstLetter(item) {
    for (let i = 0; i < item.length; i++) {
      if (item[i] !== ' ') return item[i];
      return null;
    }
  }

  members.forEach((member) => {
    if (!checkIsString) return;
    dreamTeamName.push(pickFirstLetter(member))
  })

  const sorted = ['f', 'b', 'd'].sort();
  console.log(sorted)

  return dreamTeamName; */
}

module.exports = {
  createDreamTeam
};
