# isDivisibleBy

> Checks divisibility of one or many numbers with 0 dependencies. 

<!-- [![NPM Version][npm-image]][npm-url]
[![Linux Build][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url] -->

## Install

```bash
npm i --save is-divisible-by
```

## Usage

```javascript
const isDivisibleBy = require('is-divisible-by');

isDivisibleBy([5,10])([10,20,30]) //true
isDivisibleBy([5,10])([10,20,21]) //false


isDivisibleBy(5,10)(10,20,30) //true
isDivisibleBy(5,10)(10,20,21) //true


//It works with most input types
isDivisibleBy([5],[15])([15],[30,45]) //true
isDivisibleBy([5],[15])([15],[30,43]) //false... because 43 is not divisible by 5
isDivisibleBy([[5],[15]])([[15],[30,45]]) //true
isDivisibleBy([[5],[15]])([[15],[30,43]]) //false
isDivisibleBy([])([]) //false
isDivisibleBy(['a'])(['b']) //false

```
