import test = require('blue-tape');

// import bitFormater = require('bit-formater');
import bitFormater from '../bit-formater';


test('See the output from bitFormater', (t) => {
  let x = bitFormater(234567543, 2);
  t.equal(x, '234.568 MB');
  t.end();
});
