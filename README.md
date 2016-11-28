# Chartify - simple and lightweight charts for React.js

[![NPM Version](https://img.shields.io/npm/v/chartify.svg?style=flat-square)](https://www.npmjs.com/package/chartify)
[![Download Month](https://img.shields.io/npm/dm/chartify.svg?style=flat-square)](https://www.npmjs.com/package/chartify)
[![Download Total](https://img.shields.io/npm/dt/chartify.svg?style=flat-square)](https://www.npmjs.com/package/chartify)
[![Travis branch](https://img.shields.io/travis/kisqin/chartify/master.svg?style=flat-square)](https://github.com/kisqin/chartify)

![alt text](https://raw.githubusercontent.com/kisqin/scale/master/img/placeit1.jpg)

Check the [EXAMPLE](https://kisqin.github.io/chartify/)

Simple and lightweight React.js plugin for building charts. The source for this module is in the [main repo](https://github.com/kisqin/chartify). Please contribute. Check [angular-scale](https://github.com/kisqin/scale) if you're using Angular.js. And [jquery-linechart](https://github.com/kisqin/jquery-linechart) if you're using JQuery.

![alt text](https://raw.githubusercontent.com/kisqin/scale/master/img/output_eSVfyQ.gif)

### Install

```
npm install chartify
```

### Getting started

```javascript
import Chartify from 'chartify';
```

```javascript
<Chartify data = {this.items}
		  width = {50} 
	      height = {10}
	      boxSize = {16}
	      line = {true}
	      theme = {"purple"} />
```

* **data** is an array of objects [{value: 0}, ... , {value: 10}]. This is the dataset of the chart.
* **width** is the horizontal length of the data array. If width param is less than the length of the data array then user will see the last values of the data array.
* **height** is the vertical length.
* **box-size** is size of each box in pixels.
* **line** is param that determines if this is a line-chart.
* **theme** is color scheme of the chart, "default", "purple", "grey" etc.

Heavily inspired by [kinopoisk.ru](https://www.kinopoisk.ru/) chart written using Adobe Flash.

![alt text](https://raw.githubusercontent.com/kisqin/scale/master/img/84d858c0af.png)

### License

The MIT License (MIT) Copyright (c) 2016 Kirill Stepkin
