function slowRandom(min, max) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * (max - min + 1)) + min);
    }, 1000);
  });
}

module.exports = slowRandom;