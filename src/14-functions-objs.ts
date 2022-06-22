(() => {
  const login = (data: {email: string, password: number}) => {
    console.log(data.email, data.password);
  }

  //login('oxhuascar321@gmail.com', '121212');
  login({
    email: 'oxhuascar321@gmail.com',
    password: 12121212
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createAd: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  addProduct({
    title: 'Pro1',
    createAd: new Date(1993, 1, 1),
    stock: 12
  });
  addProduct({
    title: 'Pro1',
    createAd: new Date(1993, 1, 1),
    stock: 12,
    size: 'XL'
  });
  console.log(products);
})();