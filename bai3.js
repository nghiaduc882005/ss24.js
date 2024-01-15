function tinhLuyThua(a, b) {
    let ketQua = Math.pow(a, b);
    console.log("Kết quả của biểu thức " + a + "^" + b + " là: " + ketQua);
  }
  
  let soA = prompt("Nhập vào số nguyên a:");
  let soB = prompt("Nhập vào số nguyên b:");
  tinhLuyThua(parseInt(soA, 10), parseInt(soB, 10));
  