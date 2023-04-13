const hashTBase = ({ login, pass, nickname = "" }) => {
  const wrapper = 4;

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
  const date = new Date().toISOString();
  let dateArr = (date + date)
    .match(/[0-9]/g)
    .reverse()
    .map((item) => Number(item) + Number(wrapper));

  const randomString = (length, charSet) => {
    let randomStr = "";
    for (let i = 0; i < length - 1; i++) {
      let randomPoz = Math.floor(Math.random() * charSet.length);
      randomStr += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomStr;
  };

  const phraseCoddind = (phrase) => {
    if (!phrase) return "";
    let secret = "";
    phrase
      .split("")
      .map(
        (phraseItem, phraseItemIndex) =>
          (secret +=
            randomString(dateArr[phraseItemIndex], charSet) + phraseItem)
      );
    return secret;
  };

  const resault = {
    l: phraseCoddind(login),
    p: phraseCoddind(pass),
    n: phraseCoddind(nickname),
    date: date,
  };

  console.log(resault);

  return charSet;
};

export default hashTBase;
