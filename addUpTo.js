function addUpTo(number) {
  let total = 0
  for (let current = 1; current <= number; current++) {
    total += current
  }
  return total
}

function addUpToPerf(number) {
  return (number * (number + 1)) / 2
}

let t1 = performance.now()
// addUpTo(1000000000)
addUpToPerf(1000000000)
let t2 = performance.now()
console.log(`Time elapsed ${(t2 - t1) / 1000} seconds`)
