import test = require('blue-tape');

// import bitFormater = require('bit-formater');
import { formatBytes, byteFormater } from '../bit-formater';


test('See the output from bitFormater', (t) => {
  let x = formatBytes(234567543, 2);
  t.equal(x, '234.568 MB');

  let y = new byteFormater();
  let r = y.add(12346765432);
  console.log(r);
  t.equal(r,'12 GB 346 MB 765 KB and 432 Bytes downloaded');
  r = y.add(93484952492834);
  t.equal(r, '93 TB 496 GB 1298 MB 1258 KB and 1266 Bytes downloaded');
  t.end();
});
