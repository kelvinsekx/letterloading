import defaults from "./defaults.js";

export default class LoadInitializer {
  load(self, el, options) {
   
      if (typeof el === "string") {
        self.el= document.querySelector(el)
      } else {
         self.el = el
      }
    
      // make options from default s and the rest
    self.options = { ...defaults, ...options };

    self.initialElContent = self.el.textContent;

    //loading speed
    self.loadSpeed = self.options.loadspeed;

    // generate default speed
    self.defaultSpeed = self.options.defaultspeed;

    //loop
    self.loop = self.options.loop;

    // strings
    self.strings = self.options.strings;

    //current string position
    self.currentStrPos = 0;

    //default shuffling
    self._shuffle = false;

    // bind currentString
    self.currentString;

    // get randomelement
    self.randomEl;

    // hidden char to fill space
    self.char = self.options.char;

    //if hide char
    self.hideChar = self.options.hideChaar;

    // array index
    self.ArrayIndex = 0;

    // delay before continuing to loop over string
    self.delay = self.options.delay;

    // stringlength
    // get order in which strings appeared in array
    self.sequence = [];
    for (let i in self.strings) {
      self.sequence[i] = i;
    }
    this.appendCsstoHead(self);
    this.hideCharByForce(self);
  }
  hideCharByForce(self) {
    if (!self.hideChar) return;
    self.char = `<span class="data-hide">${self.char}</span>`;
  }

  appendCsstoHead(self) {
    const cssname = "data-hide";

    if (!self.hideChar) {
      return;
    }
    if (document.querySelector(`[${cssname}]`)) {
      return;
    }

    let css = document.createElement("style");
    css.type = "text/css";
    css.setAttribute(cssname, true);

    let innerCss = "";

    if (self.hideChar) {
      innerCss += `
              .data-hide{
                opacity: 0;}`;
    }

    if (css.length === 0) {
      return;
    }
    css.innerHTML = innerCss;
    document.body.appendChild(css);
  }
 
  
}

export let loadinitializer = new LoadInitializer();
