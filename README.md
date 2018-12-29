# isDivisibleBy

> Checks divisibility of one or many lists of numbers.


## Install

```bash
npm i --save isdivisibleby
```

## Usage

```javascript
const isDivisibleBy = require('isdivisibleby');

//isDivisibleBy(...divisors)(...dividends);

isDivisibleBy([5,10])([10,20,30]) //true
isDivisibleBy([5,10])([10,20,21]) //false


isDivisibleBy(5,10)(10,20,30) //true
isDivisibleBy(5,10)(10,20,21) //false


//It works with most input types
isDivisibleBy([5],[15])([15],[30,45]) //true
isDivisibleBy([5],[15])([15],[30,43]) //false
isDivisibleBy([[5],[15]])([[15],[30,45]]) //true
isDivisibleBy([[5],[15]])([[15],[30,43]]) //false
isDivisibleBy([])([]) //false
isDivisibleBy(['a'])(['b']) //false


const divisibleBy3and5 = isDivisibleBy(3,5);
divisibleBy3and5(15,30); //true

```
