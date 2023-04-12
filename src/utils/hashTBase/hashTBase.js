const hashTBase = () =>
  // (Math.random() + Number.MIN_VALUE).toString(36).slice(-10);
  {
    const phrase = "PAROLL";
    const wrapper = 8;

    let arrSymbol = [];
    const arrCharCode = [
      [48, 57],
      [64, 90],
      [95, 96],
      [97, 122],
      [1025, 1112],
      [1162, 1168],
    ];

    for (const arrItem of arrCharCode) {
      for (let i = arrItem[0]; i <= arrItem[1]; i += 1)
        arrSymbol.push(String.fromCharCode(i));
    }

    const charSet = arrSymbol.join("");
    //https://overcoder.net/q/2525/генерация-случайной-строки-символов-в-javascript
    //https://asecuritysite.com/coding/asc2?val=1024%2C1280

    // console.log(charSet);

    const date = new Date().toISOString();
    let itemLength = Number(wrapper);
    let dateArr = (date + date)
      .match(/[0-9]/g)
      .reverse()
      .map((item) => {
        itemLength += Number(item);
        console.log(itemLength);
        return itemLength;
      });
    console.log(dateArr);

    const randomString = (length, charSet) => {
      let randomString = "";
      for (let i = 0; i < length; i++) {
        let randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
      }
      return randomString;
    };

    let res = randomString(50, charSet);
    console.log(res);

    return charSet;
  };

export default hashTBase;
