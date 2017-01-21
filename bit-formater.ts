class byteFormater {
  YB: number;
  ZB: number;
  EB: number;
  PB: number;
  TB: number;
  GB: number;
  MB: number;
  KB: number;
  B : number;

  constructor() {
    const self = this;
    self.TB = 0;
    self.GB = 0;
    self.MB = 0;
    self.KB = 0;
    self.B  = 0;
  }

  add(num: number): string {
    const self = this;
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
    self.B  += num;
    if (self.B > 1000) {
      self.KB++;
    }

    let r = '';
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
  }
}

function formatBytes (bytes: number, decimal: number): string {
  if (bytes === 0) { return '0 Bytes'; }
  let k = 1000;
  let dm = decimal + 1 || 5;
  let sizes = [ 'Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB' ];
  let i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export { formatBytes, byteFormater }
