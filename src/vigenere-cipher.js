const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    const upperMessage = message.toUpperCase();
    const upperKey = key.toUpperCase();

    const encryptedMessage = [];
    let keyIndex = 0;
    
    for (let i = 0; i < upperMessage.length; i++) {
      const char = upperMessage[i];
      if (char <= 'Z' && char >= 'A') {
        const offsetCharCode = char.charCodeAt(0) - 65;
        const offsetKeyCode = upperKey[keyIndex].charCodeAt(0) - 65;
        const charCode = (offsetCharCode + offsetKeyCode) % 26 + 65;
        encryptedMessage.push(String.fromCharCode(charCode));
        keyIndex = keyIndex === (upperKey.length - 1) ? 0 : keyIndex + 1;
      } else encryptedMessage.push(char);
    }
    return this.isDirect ? encryptedMessage.join('') : encryptedMessage.reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');
    const upperMessage = encryptedMessage.toUpperCase();
    const upperKey = key.toUpperCase();

    const decryptedMessage = [];
    let keyIndex = 0;
    
    for (let i = 0; i < upperMessage.length; i++) {
      const char = upperMessage[i];
      if (char <= 'Z' && char >= 'A') {
        const offsetCharCode = char.charCodeAt(0) - 65;
        const offsetKeyCode = upperKey[keyIndex].charCodeAt(0) - 65;
        const charCode = (offsetCharCode - offsetKeyCode + 26) % 26 + 65;
        decryptedMessage.push(String.fromCharCode(charCode));
        keyIndex = keyIndex === (upperKey.length - 1) ? 0 : keyIndex + 1;
      } else decryptedMessage.push(char);
    }
    return this.isDirect ? decryptedMessage.join('') : decryptedMessage.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
