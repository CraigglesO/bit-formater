function formatBytes (bytes: number, decimal: number): string {
  if (bytes === 0) { return '0 Bytes'; }
  let k = 1000;
  let dm = decimal + 1 || 5;
  let sizes = [ 'Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB' ];
  let i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export default formatBytes;
