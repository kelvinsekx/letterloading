# LetterLoading

LetterLoading js is a javascript library for making awesome letter simulations. It default simulation is a letter loading simulation.

# Core concepts of LetterLoading.

- **flexibility:**
This is because it is intended from ground up to do than just loading letter simulation. It could be extended to achieve even more animation simulation (this feature is currently work in progress).
- **robustness:**
LetterLoading gives you the possibility to break it and achieve even more simulation.

# Installation

You can use LetterLoading as a 
- script tag from CDN
```
https://unpkg.com/letterloading@1.0.3/library/letterloading.js
```

- install from NPM

```
npm install letterloading
```

### Setup

To use letterloading is just simple.

```javascript
// CDN can be used instead tho...

import LetterLoading from 'letterloading';

var options = {
  strings: ['tell me you are lovely'],
  loadSpeed: 8
};

var letterload = new LetterLoading('.element', options);
```

## See letter loading in action
[letterloading in action](https://kelvinsekx.github.io/letterloading/)

# Awesome apps with LetterLoading in action

- https://www.kelvinsekx.codes

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

LetterLoading is built with love in mind, and has thereby adopted a Code Of Conduct that we expect our loving contributors to please adhere to. Please read the text at CODE_OF_CONDUCT.md

## Contributing Guide

Read our [contributing guide](/.github/CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to LetterLoading.

# License

LetterLoading is MIT licensed.
