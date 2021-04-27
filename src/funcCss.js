function css (color) {
    return `.line-cursor {
        font-weight: 100;
        font-size: 20px;
        -webkit-animation: 1s blink step-end infinite;
        -moz-animation: 1s blink step-end infinite;
        -ms-animation: 1s blink step-end infinite;
        -o-animation: 1s blink step-end infinite;
        animation: 1s blink step-end infinite;
      }
      .block-cursor {
        font-weight: 900;
        width: 800px;
        -webkit-animation: 1s blink step-end infinite;
        -moz-animation: 1s blink step-end infinite;
        -ms-animation: 1s blink step-end infinite;
        -o-animation: 1s blink step-end infinite;
        animation: 1s blink step-end infinite;
      }
      .underscore-cursor {
        font-weight: 900;
        width: 800px;
        -webkit-animation: 1s blink step-end infinite;
        -moz-animation: 1s blink step-end infinite;
        -ms-animation: 1s blink step-end infinite;
        -o-animation: 1s blink step-end infinite;
        animation: 1s blink step-end infinite;
      }
      @keyframes blink {
        from, to {
          opacity: 0.9;
        }
        50%{
          opacity: 0.0;
        }
      }

      @-moz-keyframes blink {
        from, to {
          opacity: 0.9;
        }
        50%{
          opacity: 0.0;
        }
      }
      @-webkit-keyframes blink {
        from, to {
          opacity: 0.9;
        }
        50%{
          opacity: 0.0;
        }
      }
      @-ms-keyframes "blink" {
        from, to {
          opacity: 0.9;
        }
        50%{
          opacity: 0.0;
        }
      }
      @-o-keyframes "blink" {
        from, to {
          opacity: 0.9;
        }
        50%{
          opacity: 0.0;
        }
      }

      .block {
        width: 0.45rem;
        padding: 0.5em 0.07em;
        display: inline-block;
        background: ${color ? color : 'black'};
        margin-left: 0.1em;
        margin-top: 0.3em;
        top: 5px;
      }
    `
}

export default css;