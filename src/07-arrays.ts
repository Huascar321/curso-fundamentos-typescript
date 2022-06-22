(() => {
  let prices = [1,2,3,4,5,6,7,8,9,10, '', true];
  prices.push(12312341);
  prices = [1, 2, 3];

  let products = ['hola', true];
  products.push(false);

  let mixed: (number | string | boolean | Object)[] = ['hola', true];
  mixed.push(12);
  mixed.push({});
  mixed.push([]);

  let numbers = [1, 2, 3, 4, 5, 123];
  numbers.map(item => item * 2);
})();