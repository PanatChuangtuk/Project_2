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

var w = prompt('กรุณากรอกน้ำหนัก');
var h = prompt('กรุณากรอกความสูง');
if (w > 0 && h > 0) {
  var bmi = w / (h / 100) ** 2;
  document.write('น้ำหนักของคุณ คือ ' + w + '<br/>');
  document.write('ความสูงของคุณ คือ ' + h + '<br/>');
  document.write('ค่า BMI หรือค่าดัชนีมวลกาย คือ ' + bmi.toFixed(2));

  let score = bmi;
  if (score >= 30) {
    // ส่วนเงื่อนไขของคนที่ BMI มากกว่าหรือเท่ากับ 30 ขึ้นไป
    document.getElementById('result').innerHTML =
      'คุณเป็นโรคอ้วนระดับ 3 (สูงสุด) กรุณาลดน้ำหนักโดยเร็ว!';
  } else if (score <= 29.9) {
    if (score >= 25) {
      document.getElementById('result').innerHTML = 'คุณเป็นโรคอ้วนระดับ 2';
    } // ส่วนเงื่อนไขของคนที่ BMI ต่ำกว่า 29.90 แต่มากกว่าหรือเท่ากับ 25
    else {
      if (score <= 24.9) {
        if (score >= 23) {
          document.getElementById('result').innerHTML = 'คุณเป็นโรคอ้วนระดับ 1';
        } // ส่วนเงื่อนไขของคนที่ BMI ต่ำกว่า 24.90 แต่มากกว่าหรือเท่ากับ 23
        else {
          if (score <= 22.9) {
            if (score >= 18.6) {
              document.getElementById('result').innerHTML = 'คุณเป็นคนสุขภาพดี';
            } // ส่วนเงื่อนไขของคนที่ BMI ต่ำกว่า 22.90 แต่มากกว่าหรือเท่ากับ 18.50
            else {
              if (score <= 18.5) {
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
