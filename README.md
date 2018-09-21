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
var my_string = "Hello dyslexia"
console.log(my_string.dyslexia()) // display something like "Hlelo dylsexia"
```

## Options

### Proba
- Description: the probability for a word in the string to be "dyslexied".
- Type : integer
- Default value: `0`
- Possible values: `0` to infinite
    - `0`: 100% of chances that the word gets "dyslexied"
    - `1`: 50% of chances that the word gets "dyslexied"
    - `2`: 33% of chances that the word gets "dyslexied"
    - `3`: 25% of chances that the word gets "dyslexied"
    - `4`: 20% of chances that the word gets "dyslexied"
    - ...
- Usage: `my_string.dyslexia(2)`