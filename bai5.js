function tinhKetQua(n) {
    let S = 1;
    for (let i = 2; i <= n; i++) {
      S += 1 / Math.pow(i, 3);
    }
    return S.toFixed(5);
  }
  
  let n = prompt("Nhập vào một số nguyên dương n:");
  let ketQua = tinhKetQua(parseInt(n, 10));
  console.log("Kết quả của biểu thức S là: " + ketQua);
  
  