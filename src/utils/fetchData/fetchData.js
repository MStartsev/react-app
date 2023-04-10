const fetchData = async (scriptURL, data) => {
  var json;
  try {
    const response = await fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (response !== '') json = await response.json();
    console.log('Success:', JSON.stringify(json));
  } catch (e) {
    console.log('Errors:', e.message);
  }
  return json;
};

export default fetchData;

// const getData = async () => {
//   const url =
//     'https://script.google.com/macros/s/AKfycbwuH3wG19viE1klcnPfZro60F7Mgtz2hE8FJsFGNfgh3Q0aPp7pUBtleS0H_wTGZSoH5A/exec?start=1325437200&end=1325439000&prefix=alert';

//   await fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//     });
// };
