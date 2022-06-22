import { createProduct, calcStock, products } from './product.service';

createProduct({
  name: 'Pro1',
  createAd: new Date(1993, 1, 1),
  stock: 12
});
createProduct({
  name: 'Pro2',
  createAd: new Date(1993, 1, 1),
  stock: 12,
  size: 'XL'
});
console.log(products);
const total = calcStock();
console.log(total);