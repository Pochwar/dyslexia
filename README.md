# String Prototype Dyslexia

A useless package to add some fun in your syntaxe!

## Installation

`npm install string-prototype-dyslexia`

## Implementation

### Back
- Require package with `require('string-prototype-dyslexia')`

### Front
- Include package with `<script>` tag: `<script src="node_modules/string-prototype-dyslexia/String.prototype.dyslexia.js"></script>`

## Usage

- Use `dyslexia()` method on any string

```
var my_string = "Hello dyslexia";
console.log(my_string.dyslexia()) // display something like "Hlelo dylsexia";
```

## Options

### Proba
- Description: the probability for a word in the string to be "dyslexied".
- Type : integer
- Default value: `0`
- Possible values: `0` to infinite
    - `0`: high probability for the word to be "dyslexied"
    - `5` or more: low probability for the word to be "dyslexied"
- Usage: `my_string.dyslexia(2)`

## Demo
https://pochwar.github.io/dyslexia/demo/
