"use strict";
var test = require("blue-tape");
var bit_formater_1 = require("../bit-formater");
test('See the output from bitFormater', function (t) {
    var x = bit_formater_1.formatBytes(234567543, 2);
    t.equal(x, '234.568 MB');
    var y = new bit_formater_1.byteFormater();
    var r = y.add(12346765432);
    console.log(r);
    t.equal(r, '12 GB 346 MB 765 KB and 432 Bytes downloaded');
    r = y.add(93484952492834);
    t.equal(r, '93 TB 496 GB 1298 MB 1258 KB and 1266 Bytes downloaded');
    t.end();
});
