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
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let dreamTeamLetters = [];
  
  function checkIsString(item) {
    return typeof item === 'string';
  }

  function pickFirstUpperCaseLetter(name) {
    return name.trim().split('')[0].toUpperCase();
  }

  function addLetter(item) {
    if (checkIsString(item)) {
      dreamTeamLetters.push(pickFirstUpperCaseLetter(item));
    }
    return '';
  }

  members.forEach(addLetter)

  return dreamTeamLetters.sort().join('');
}

module.exports = {
  createDreamTeam
};
