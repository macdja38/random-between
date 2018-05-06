/**
 * Gets a random number between 2 bigInts
 * @param {BigInt} max
 * @param {BigInt} [min=0n]
 * @returns {BigInt}
 */
function randomBetween(max, min = 0n) {
  max = BigInt(max);
  min = BigInt(min);
  if (max < min) {
    [max, min] = [min, max]
  }
  const range = max - min;
  const count = calculatePrecision(range);
  let random = new Array(Number(count))
    .fill(0)
    .map(() => BigInt(Math.random() * (2 ** 52)))
    .map((int, index) => int << (BigInt(index) * 52n))
    .reduce((acc, int) => acc + int, 0n);


  let bitCount = countBits(range);
  let minRandom = random >> ((52n * count) - bitCount);
  if (minRandom > range) return randomBetween(max, min);
  else return minRandom + min;
}

function calculatePrecision(range) {
  const result = range >> 52n;
  if (result >= 1n) {
    return calculatePrecision(result) + 1n;
  }
  return 1n;
}

function countBits(range) {
  const result = range >> 1n;
  if (result >= 1n) {
    return countBits(result) + 1n;
  }
  return 1n;
}

module.exports = randomBetween;