while (true) {
  var userInput = prompt('กรุณาเลือกเพศของคุณ :\n1.เพศชาย\n2.เพศหญิง\n');
  if (userInput === '1') {
    alert('เพศชาย');
    break;
  } else if (userInput === '2') {
    alert('เพศหญิง');
    break;
  } else {
    alert('คุณไม่ได้เลือกเพศกรุณาเลือกใหม่');
  }
}
let weight = prompt('กรอกน้ำหนัก :');
let height = prompt('กรอกส่วนสูง :');
