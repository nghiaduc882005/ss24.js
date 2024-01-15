function tinhTongSoNguyen(a, b) {
    let sum = 0;
    for (let i = Math.min(a, b) + 1; i < Math.max(a, b); i++) {
      sum += i;
    }
    console.log('Tổng các số nguyên trong khoảng giữa', a, 'và', b, 'là', + sum);
  }
  
  let a = prompt('Nhập số nguyên a:');
  let b = prompt('Nhập số nguyên b:');
  
  a = parseInt(a);
  b = parseInt(b);

  tinhTongSoNguyen(a, b);
  