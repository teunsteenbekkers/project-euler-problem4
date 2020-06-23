class PalindromicNumberFinder {
  constructor(start, end) {
    if (start >= end) {
      throw "Start number must be smaller than end!";
    }
    this.start = start;
    this.end = end;
  }

  find() {
    let max = 0;
    // When I started with the lowest number (start) the loop didn't seem to finish (got 580085)
    // So I decided to start with the highest number (end) to avoid this. It's a quicker way to get to the answer as well I think
    for (let numberOne = this.end; numberOne >= this.start; numberOne--) {
      for (let numberTwo = this.end; numberTwo >= this.start; numberTwo--) {
        const product = numberOne * numberTwo;
        const productString = `${product}`;

        let reversedProductString = productString.split("").reverse().join("");
        if (productString === reversedProductString) {
          if (product > max) {
            console.log(
              `N1: ${numberOne} | N2: ${numberTwo} | New max: ${max} | Product: ${product}`
            );
            max = product;
          }
          break;
        }
      }
    }

    return max;
  }
}
