(() => {
  /*let myNumber: number;
  let myString: string;*/
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 12;

  let myString: string | null = null;
  myString = 'ass';

  /*function hi(name: string | null) {
    let hello: string = 'Hola ';
    if (name) {
      hello += 'name';
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }*/

  function hiV2(name: string | null) {
    let hello: string = 'Hola ';
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }

  hiV2('Nicolas');
  hiV2(null);
})();