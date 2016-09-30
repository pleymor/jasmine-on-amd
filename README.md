# Jasmine-On-Amd

This project illustrates how to create unit tests with Jasmine on a project based on AMD modules.

It uses the excellent SquireJs for dependencies mocking.

## How to test

Simply download or clone the project and open specrunner.html to see Jasmine tests page.

## Use this project for your tests

This project can be used as template to create unit tests on modules.

Simply put your modules to test and your jasmine specs in `src/`, and list the specs to run in `main.js`.

```
|lib/
||jasmine/
||squire/
||require.js
|src/            # tested modules and specs
|main.js         # define here the specs to run 
|specrunner.html
```
