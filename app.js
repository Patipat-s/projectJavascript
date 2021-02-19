/*ตัวแปรเก็บค่าต่างๆ */
let sum_income = 0;
let sum_expenses = 0;
let i = 0;

/*ฟังชั่นเคลียข้อความในฟอร์ม*/
function cleartext() {
  document.getElementById("my_money").value = '';
  document.getElementById("input_text").value = "";
  document.getElementById("type_Select").selectedIndex = "0";
}

/*ฟังชั่นรายรับจะดึงข้อมูลใน input "my_money" และทำการ + เพิ่มในจำนวนเงินที่เราใส่มาเรื่อยๆ
และส่งไปยังฟังชั่นแสดงผล*/
function income() {
  sum_income += parseInt(document.getElementById("my_money").value);
  valueIncome = parseInt(document.getElementById("my_money").value);
  display(valueIncome)
}

/*ฟังชั่นรายจ่ายจะดึงข้อมูลใน input "my_money" และทำการ + เพิ่มในจำนวนเงินที่เราใส่มาเรื่อยๆ
และส่งไปยังฟังชั่นแสดงผล*/
function expenses() {
  sum_expenses += parseInt(document.getElementById("my_money").value);
  valueExpenses = parseInt(document.getElementById("my_money").value);
  display(valueExpenses)
}

/*ฟังชั่นแสดงผลจะแสดงค่าต่างๆที่ฟังชั่นรายรับ และรายจ่ายส่งมาให้*/
function display() {
  let x = document.getElementById("type_Select").selectedIndex;
  let y = document.getElementById("type_Select").options;

  /*สร้างตัวเป็น เก็บค่าของ value ใน select ที่เราเลือก */
  document.getElementById("resultSum_income").innerHTML = sum_income + " " + "บาท";
  document.getElementById("resultSum_expenses").innerHTML = sum_expenses + " " + "บาท";

  /*ส่งข้อมูล ของรายรับ ลบด้วย รายจ่ายไปยัง id "result_net_money"*/
  document.getElementById("result_net_money").innerHTML = "<u>" + (sum_income - sum_expenses) + " " + "บาท" + "</u>";
  i += 1;

  /*นำค่า value ของ select ที่เราเลือกมาใส่ที่ if else ถ้าได้ 1 จะไปยังฟังชั่นรายรับ ถ้าได้ 2 จะไปยัง ฟังชั่นรายจ่าย */
  if (y[x].index === 1) {
    document.getElementById("table_input").innerHTML += "<tr><th scope=\"row\">" + i + "</th><td>" + document.getElementById("input_text").value + "</td><td>รายรับ</td><td style=\"color:green;\">" + valueIncome + "</td></tr>"
  }
  else if (y[x].index === 2) {
    document.getElementById("table_input").innerHTML += "<tr><th scope=\"row\">" + i + "</th><td>" + document.getElementById("input_text").value + "</td><td>รายจ่าย</td><td style=\"color:red;\">" + valueExpenses + "</td></tr>"
  }

  /*ใช้งานฟังชั่นเคลียข้อความ*/
  cleartext()
}

/*ฟังชั่นแจ้งเตือน มาจากปุ่มบันทึก*/
function alert_msg() {
  let x = document.getElementById("type_Select").selectedIndex;
  let y = document.getElementById("type_Select").options;

  /*คำสั่ง if else ถ้าtextbox ทั้ง 2 หรือ อย่างได้อย่างหนึ่ง ระบบจะแจ้งให้กรอกข้อมูลให้ครบ */
  if (document.getElementById("input_text").value === "" || document.getElementById("my_money").value == "") {
    alert("กรุณากรอกข้อมูลให้ครบถ้วน")
    cleartext()
  }
  
  /*นำค่า value ของ select ที่เราเลือกมาใส่ที่ if else ถ้าเป็น 0 จะแจ้งเตือนขึ้นว่า เลือกประเภท ถ้าเป็น 1ไปยังฟังชั่น income หรือฟังชั่นรายรับ
  ถ้าเป็น 2 ไปยังฟังชั่น expenses หรือฟังชั่นรายจ่าย */
  else {
    if (y[x].index === 0) {
      alert("กรุณาเลือกประเภทธุรกรรม")
    }
    else if (y[x].index === 1) {
      income()
    }
    else if (y[x].index === 2) {
      expenses()
    }
  }
}
