# LetterLoading

LetterLoading js is a javascript library for making awesome letter simulations. It default simulation is a letter loading simulation.

## Core concepts of LetterLoading.

- **flexibility:**
This is because it is intended from ground up to do than just loading letter simulation. It could be extended to achieve even more animation simulation (<span style="color: red">this feature is currently work in progress</span>).

You can extend Letterloading to do wonders

```shell 
class Laliga extends LetterLoading {
  constructor(el, options) {
    super(el, options);
    this.beginAnimation();
  } 
  ...
}
```

We have two animations type presently, and this is just the beginning of more types.

```shell
var letter = new LetterLoading.Liga('#main', {
    loadspeed: 3,
    randomizeEl : false
  });
```

```shell
 var letter2 = new LetterLoading.Typed('#main2', {
    strings: [
      "You're lovely... yes you are",
      "This is an example string",
      "tell me about what more animation you love",
      "Lastly, Hey, if you're Bukunmi, I love you"
    ],
    // set loop to false;
    loop : false,
    loadspeed: 5
  });
```

- **robustness:**
LetterLoading gives you the possibility to break it and achieve even more simulation. Its API/options interfaces can be easily changed to meet your specific desires. 

# Installation

You can use LetterLoading as a 
- script tag from CDN
```
https://unpkg.com/letterloading@1.2.0/library/letterloading.js
```

- install from NPM

```
npm install letterloading
```

### Setup

To use letterloading is simple.

```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://unpkg.com/letterloading@2.0.0/library/letterloading.js" type="text/javascript"></script>
        <script src="./demo.js"></script>
    </head>
    <body>
        <div class="element"></div>
    </body>
```

```javascript
//File: demo.js

// import... might not be needed if you have used a cdn, like in our case
/** import LetterLoading from 'letterloading'; */

var options = {
  strings: ['tell me you are lovely'],
  loadSpeed: 8
};

/**
 * LetterLoading takes two arguments of the element you want it to mount, and the necessary api objects in form of options
*/

var letter = new LetterLoading.Liga('.element', options);
```

## See letter loading in action
See practical examples on some of its animation and public use of her APIs.
[letterloading in action](https://kelvinsekx.github.io/letterloading/)

### Use with React js

```javascript
import React from "react"
// ensure you'd :: npm i letterloading
import LetterLoading from "letterloading";

class LetterLoader extends React.Component{
    componentDidMount(){
        const options ={
            strings: ["I love you", "And I meant the former" ]
          };
          this.letterload = new LetterLoading.Typed(this.el, options);
    }

    componentWillUnmount(){
        this.letterload.destroy();
    }
    render(){
        return(
            <span ref={(el) => { this.el = el; }}/>
        )
    }
}

export default LetterLoader;
```


# Contributing

The purpose of LetterLoading Library is to make minimal and yet robust imaginative animations and simulations to letters or strings. 

We aim to provide ready to use library to provide all sort of letter animations. But this is work in progress and the plan may seem slow for now. However, to achieve these big aims your contribution is always welcomed. We are open source.

Read below to learn how you can be a part of improving LetterLoading js.

## Code of Conduct

LetterLoading is built with love in mind, and has thereby adopted a Code Of Conduct that we expect our loving contributors to please adhere to. Read the text at [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)

## Contributing Guide

Read our [contributing guide](/.github/CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to LetterLoading.

# License

LetterLoading is MIT licensed.
