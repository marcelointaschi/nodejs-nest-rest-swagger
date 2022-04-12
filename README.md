<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Emblem-money.svg/1024px-Emblem-money.svg.png" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Currency Converter API</p>


## Description

API Service to convert currencies.   
The original API is [Awesomeapi](https://docs.awesomeapi.com.br/api-de-moedas). Check the documentation for more information.  

To include more currencies, check [Here](https://economia.awesomeapi.com.br/xml/available)


Below some e.g:

Current price:  
https://economia.awesomeapi.com.br/json/last/USD-BRL

Range of days starting today:  
https://economia.awesomeapi.com.br/json/daily/USD-BRL/5

Range of days between two dates:  
https://economia.awesomeapi.com.br/USD-BRL/5?start_date=20200301&end_date=20200330

Current price of all currencies:(Deprecated)  
https://economia.awesomeapi.com.br/json/all


## GUI
```
http://localhost:3000/api/
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

