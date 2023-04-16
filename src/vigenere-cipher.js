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
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        const keyChar = key.charCodeAt(j % key.length) - 65;
        const encryptedCharCode = ((charCode - 65 + keyChar) % 26) + 65;

        result += String.fromCharCode(encryptedCharCode);
        j++;
      } else {
        result += message[i];
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let j = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const charCode = encryptedMessage.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        const keyChar = key.charCodeAt(j % key.length) - 65;
        const decryptedCharCode = ((charCode - 65 - keyChar + 26) % 26) + 65;

        result += String.fromCharCode(decryptedCharCode);
        j++;
      } else {
        result += encryptedMessage[i];
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};