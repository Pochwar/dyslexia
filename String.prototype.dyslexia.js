'use strict';

if(!String.prototype.dyslexia) {
  String.prototype.dyslexia = function(proba) {
    proba = proba == null ? 0 : proba
    return alea(this,proba)
  }
}

function alea(string, proba){
  var words = string.split(' ')
  var wrods = []
  words.forEach(function(word) {
    var chances = randomize(0, proba)
    if (chances == 0){
      var chars = word.split('')
      invert2Indexes(chars)
      wrods.push(chars.join(''))
    } else {
      wrods.push(word)
    }
  })
  return wrods.join(' ')
}

function invert2Indexes(a){
  var randomIndex = randomize(1, a.length-2)
  var temp
  a.forEach(function(value, i){
    if (i === randomIndex && i < a.length){
      temp = a[i]
      a[i] = a[i+1]
      a[i+1] = temp
    }
  })
}

function randomize(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}