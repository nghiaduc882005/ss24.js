function inBinhPhuong(n) {
    let sum = 0;
    let i = 2;
    while (sum + i * i <= n) {
      sum += i * i;
      console.log(i * i);
      i += 2;
    }
  }
  
  let number = prompt("Nhập vào một số nguyên dương:");
  inBinhPhuong(parseInt(number, 10));
  