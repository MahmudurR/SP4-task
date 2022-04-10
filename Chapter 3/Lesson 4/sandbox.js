// 202-15-14431

const bill = (products, tax) => {
  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += products[i]  + products[i] * tax;
  }
  return total;
}

console.log(greet());
console.log(bill([10,15,30], 0.2));