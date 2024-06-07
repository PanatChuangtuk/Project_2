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

var w = prompt('กรุณากรอกน้ำหนักของคุณ (KG.)');
var h = prompt('กรุณากรอกความสูงของคุณ (CM.)');
if (w > 0 && h > 0) {
  var bmi = w / (h / 100) ** 2;
  (document.getElementById('W').innerHTML = 'น้ำหนักของคุณ คือ ' + w + ' KG.'),
    '<br/>';
  (document.getElementById('H').innerHTML = 'ความสูงของคุณ คือ ' + h + ' CM.'),
    '<br/>';
  document.getElementById('BM').innerHTML =
    'ค่า BMI หรือค่าดัชนีมวลกาย คือ ' + bmi.toFixed(2); //toFixed กำหนดจำนวนทศนิยมที่ต้องการให้แสดงผล
  if (bmi >= 30) {
    // ส่วนเงื่อนไขของคนที่ BMI มากกว่าหรือเท่ากับ 30 ขึ้นไป
    document.getElementById('result').innerHTML =
      'คุณเป็นโรคอ้วนระดับ 3 (สูงสุด) กรุณาลดน้ำหนักโดยเร็ว!';
  } else if (bmi <= 29.9) {
    if (bmi >= 25) {
      document.getElementById('result').innerHTML = 'คุณเป็นโรคอ้วนระดับ 2';
    } // ส่วนเงื่อนไขของคนที่ BMI ต่ำกว่า 29.90 แต่มากกว่าหรือเท่ากับ 25
    else {
      if (bmi <= 24.9) {
        if (bmi >= 23) {
          document.getElementById('result').innerHTML = 'คุณเป็นโรคอ้วนระดับ 1';
        } // ส่วนเงื่อนไขของคนที่ BMI ต่ำกว่า 24.90 แต่มากกว่าหรือเท่ากับ 23
        else {
          if (bmi <= 22.9) {
            if (bmi >= 18.6) {
              document.getElementById('result').innerHTML = 'คุณเป็นคนสุขภาพดี';
            } // ส่วนเงื่อนไขของคนที่ BMI ต่ำกว่า 22.90 แต่มากกว่าหรือเท่ากับ 18.50
            else {
              if (bmi <= 18.5) {
                document.getElementById('result').innerHTML =
                  'คุณเป็นผอมเกินไป กรุณาเพิ่มน้ำหนัก!';
              } // ส่วนเงื่อนไขของคนที่ BMI ต่ำกว่าหรือเท่ากับ 18.50 ลงไป
            }
          }
        }
      }
    }
  }
}
//document.getElementById('totals').innerHTML;
