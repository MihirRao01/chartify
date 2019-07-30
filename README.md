<h1 align='center'>Chartify</h1>

<p align='center'>React.js plugin for building charts using CSS. <a target="_blank" href="https://chartify-213721.firebaseapp.com/">Demo</a></p>

<p align='center'>
	<a href='https://www.npmjs.com/package/chartify'><img src="https://img.shields.io/npm/v/chartify.svg?style=flat-square" alt=""></a>
	<a href='https://www.npmjs.com/package/chartify'><img src='https://img.shields.io/npm/dm/chartify.svg?style=flat-square' /></a>
	<a href='https://www.npmjs.com/package/chartify'><img src='https://img.shields.io/npm/dt/chartify.svg?style=flat-square' /></a>
	<a href='https://github.com/kis/chartify'><img src='https://img.shields.io/travis/kis/chartify/master.svg?style=flat-square' /></a>
    <a href='https://coveralls.io/github/kis/chartify?branch=master'><img src='https://coveralls.io/repos/github/kis/chartify/badge.svg?branch=master' alt='Coverage Status' /></a>
</p>

![alt text](https://raw.githubusercontent.com/kis/chartify/master/blocks.jpg)

The source for this module is in the [main repo](https://github.com/kis/chartify).  
Example app is [here](https://github.com/kis/chartify/tree/master/example).  
Backend service for the example app is [here](https://github.com/kis/chartify-service).  
npm package is [here](https://www.npmjs.com/package/chartify).

<h3 align='center'>Install</h3>

<p align="center">
    <a href="https://github.com/kis/chartify/blob/master/index.js">
        <img src="http://img.badgesize.io/kis/chartify/master/index.js?compression=gzip">
    </a>
</p>

```
npm install chartify --save-dev
```

<h3 align='center'>Getting started</h3>

```javascript
import Chartify from 'chartify';

let data = [{
    xValue: '20.11.2016',
    yValue: 5,
    title: '007 Spectre'
}];

let config = {
    theme: 'blue',
    width: 50,			      
    height: 10,		
    boxSize: 20,
    boxRadius: 8,
    line: false,
    lineOnly: false,
    bordered: false
};

<Chartify 
    data={data} 
    container="films-container" 
    config={config} 
/>
```

<h3 align='center'>Passing props</h3>

Data prop is a dataset that should be an array of objects:    
<b>[{ xValue: '12.03.2019', yValue: 8, title: 'men in black' }]</b>  

Keys are required and types are:  
<b>{ xValue: string, yValue: number, title: string }</b>  

Container prop is a class that will be added to the chart container element. This is important in case you have more than one chart on your page.   

Config prop is an object with properties:  
<b>theme</b>:<i>string</i> - is color scheme of the chart, <i>"default", "blue", "grey", "white"</i> etc.<br/>
<b>width</b>:<i>number</i> - is the length of the data array by X-axis.<br/>
<b>height</b>:<i>number</i> - is the length of the data by Y-axis.<br/>
<b>boxSize</b>:<i>number</i> - is size of each box in pixels.<br/>
<b>boxRadius</b>:<i>number</i> - is border radius of each box in pixels.<br/>
<b>line</b>:<i>boolean</i> - is param that determines if this is a line-chart.<br/>
<b>lineOnly</b>:<i>boolean</i> - is param that determines if we show only line on white background.<br/>
<b>bordered</b>:<i>boolean</i> - is param that determines if each box has white borders.<br/>  

<h3 align='center'>License</h3>

The MIT License (MIT) Copyright (c) 2019
