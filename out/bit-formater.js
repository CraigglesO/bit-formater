"use strict";
var byteFormater = (function () {
    function byteFormater() {
        var self = this;
        self.TB = 0;
        self.GB = 0;
        self.MB = 0;
        self.KB = 0;
        self.B = 0;
    }
    byteFormater.prototype.add = function (num) {
        var self = this;
        while (num > 1000000000000) {
            self.TB++;
            num -= 1000000000000;
        }
        while (num > 1000000000) {
            self.GB++;
            num -= 1000000000;
        }
        while (num > 1000000) {
            self.MB++;
            num -= 1000000;
        }
        while (num > 1000) {
            self.KB++;
            num -= 1000;
        }
        self.B += num;
        if (self.B > 1000) {
            self.KB++;
        }
        var r = '';
        if (self.TB) {
            r += self.TB + ' TB ';
        }
        if (self.GB) {
            r += self.GB + ' GB ';
        }
        if (self.MB) {
            r += self.MB + ' MB ';
        }
        if (self.KB) {
            r += self.KB + ' KB and ';
        }
        if (self.B) {
            r += self.B + ' Bytes downloaded';
        }
        return r;
    };
    return byteFormater;
}());
exports.byteFormater = byteFormater;
function formatBytes(bytes, decimal) {
    if (bytes === 0) {
        return '0 Bytes';
    }
    var k = 1000;
    var dm = decimal + 1 || 5;
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
exports.formatBytes = formatBytes;
