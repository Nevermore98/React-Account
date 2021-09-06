const generateOutput = (text: string, output: string) => {
  switch (text) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (output === '0') {
        return text;
      }
      // 仅保留小数点前 9 位
      if (output.length >= 9 && output.indexOf('.') === -1) {
        console.log(output);
        return output;
      }
      // 仅保留小数点后 2 位
      if(output.indexOf('.') >= 0 && output.split('.')[1].length >= 2){
        return output;
      }
      return output + text;
    case '.':
      if (output.indexOf('.') >= 0) {
        return output;
      }
      return output + '.';
    case '删除':
      if (output.length === 1) {
        return '';
      } else {
        // 抽取 第 0 到 倒数第二个
        return output.slice(0, -1) || '';
      }
    case '清空':
      return '0';
    default:
      return '';
  }
};
export default generateOutput;
