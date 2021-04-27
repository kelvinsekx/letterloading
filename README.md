# LetterLoading

LetterLoading js is a javascript library for making awesome letter simulations. It default simulation is a letter loading simulation.

# Core concepts of LetterLoading.

- **flexibility:**
This is because it is intended from ground up to do than just loading letter simulation. It could be extended to achieve even more animation simulation (<span style="color: red">this feature is currently work in progress</span>). This is achieved with the **simulate API**.

For example, you can make the library automatically simulate typed animation like this.

```javascript
var letter = new LetterLoading('#id', {
    loadspeed: 2,
    cursor: true,
    simulate: "typed"
  });
```

Please note: more automatic animation that be set with simulate is currently work in progress. "typed" is the only option yet.

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
        <script src="https://unpkg.com/letterloading@1.2.0/library/letterloading.js" type="text/javascript"></script>
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
var letterload = new LetterLoading('.element', options);
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
          this.letterload = new LetterLoading(this.el, options);
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
