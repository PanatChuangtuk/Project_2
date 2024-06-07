while (true) {
  var userInput = prompt('กรุณาเลือกเพศของคุณ :\n1.เพศชาย\n2.เพศหญิง\n');
  if (userInput == '1') {
    document.getElementById('S').innerHTML = 'เพศของคุณ คือ เพศชาย ';
    break;
  } else if (userInput == '2') {
    document.getElementById('S').innerHTML = 'เพศของคุณ คือ เพศหญิง ';
    break;
  } else {
    alert('คุณไม่ได้เลือกเพศกรุณาเลือกใหม่');
  }
}

while (true) {
  var w = prompt('กรุณากรอกน้ำหนักของคุณ (KG.)');
  var h = prompt('กรุณากรอกความสูงของคุณ (CM.)');
  if (w > 0 && h > 0 && h != '' && w != '') {
    var bmi = w / (h / 100) ** 2;
    document.getElementById('W').innerHTML = +w + ' KG.';
    document.getElementById('H').innerHTML = +h + ' CM.';
    document.getElementById('BM').innerHTML =
      'ค่า BMI หรือค่าดัชนีมวลกาย คือ ' + bmi.toFixed(2);
    if (bmi >= 30) {
      document.getElementById('result').innerHTML =
        'คุณเป็นโรคอ้วนระดับ 3 (สูงสุด) กรุณาลดน้ำหนักโดยเร็ว!';
    } else if (bmi >= 25) {
      document.getElementById('result').innerHTML = 'คุณเป็นโรคอ้วนระดับ 2';
    } else if (bmi >= 23) {
      document.getElementById('result').innerHTML = 'คุณเป็นโรคอ้วนระดับ 1';
    } else if (bmi >= 18.5) {
      document.getElementById('result').innerHTML = 'คุณเป็นคนสุขภาพดี';
    } else {
      document.getElementById('result').innerHTML =
        'คุณเป็นผอมเกินไป กรุณาเพิ่มน้ำหนัก!';
    }
    break;
  } else {
    alert('คุณกรอกข้อมูลไม่ครบ');
  }
}
