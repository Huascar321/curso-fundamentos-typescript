type Sizes = 'S' | 'M' | 'L' | 'XL';
type Product = {
  name: string,
  createAd: Date,
  stock: number,
  size?: Sizes
};

export {
  Sizes,
  Product
}