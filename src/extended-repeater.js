const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = [];
  let add = [];

  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let separator = options.separator ? options.separator : '+';
  let additionRepeatTimes = options.additionRepeatTimes
    ? options.additionRepeatTimes
    : 1;
  let additionSeparator = options.additionSeparator
    ? options.additionSeparator
    : '|';

  for (let i = 0; i < additionRepeatTimes; i++) {
    add.push(
      options.addition === null ? String(options.addition) : options.addition
    );
  }

  add = add.join(additionSeparator);

  for (let j = 0; j < repeatTimes; j++) {
    res.push(str + add);
  }

  res = res.join(separator);

  return res;
}

console.log(
  repeater(null, {
    repeatTimes: 3,
    separator: '??? ',
    addition: null,
    additionRepeatTimes: 3,
    additionSeparator: '!!!',
  })
);

module.exports = {
  repeater,
};
