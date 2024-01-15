function inBinhPhuongSoChan() {
    var n = prompt("Nhập vào một số nguyên dương:");
    n = parseInt(n);

    for (var i = 2; i <= n; i += 2) {
      console.log("Bình phương của " + i + " là: " + i * i);
    }
  }
  
  inBinhPhuongSoChan();
  