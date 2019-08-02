const promise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve('OK');
    }, 2000);
});

promise
  .then((result) => {
      console.log(result);
  })
  .catch((error) => {
      console.log(error);
  });