(() => {
  let userId: string | number;
  userId = 1212;
  userId = 'boat';

  function greeting(myText: string | number) {
    if (typeof myText === "string") {
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`);
    }
  }
  greeting('Nicolas');
  greeting(1212.1212121212);
})();