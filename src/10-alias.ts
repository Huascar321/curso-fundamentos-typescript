(() => {
  type UserId = string | number;
  let userId: UserId;

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSizes: Sizes;
  shirtSizes = 'S';
  shirtSizes = 'M';
  shirtSizes = 'L';
  shirtSizes = 'XL';

  function greeting(userId: UserId, size: Sizes) {
    if (typeof userId === "string") {
      console.log(`string ${userId.toLowerCase()}`);
    }
  }

  greeting(1111, 'S');
  greeting('1111', 'XL');
})();