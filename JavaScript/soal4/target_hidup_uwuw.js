const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = { id: 1, name: "John" };
    resolve(data); // resolve the promise with the data after 1 second
  }, 1000);
});

fetchData.then((data) => {
  console.log(data); // { id: 1, name: "John" }
}).catch((error) => {
  console.error(error);
});
