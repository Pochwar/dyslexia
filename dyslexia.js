(function() {
	var dyslexia_in = document.querySelector('#dyslexia_in')
	var dyslexia_out = document.querySelector('#dyslexia_out')

	dyslexia_in.addEventListener('keyup', function() {
	  dyslexia_out.innerText = this.value.dyslexia()
  }, false);

})();




String.prototype.dyslexia = function() {
    var wrod = alea(this,0).toLowerCase();
    wrod = ucfirst(wrod);
    return wrod;
}

function alea(string, proba){
    var chances = randomize(0, proba);
    if (chances == 0){
        var chars = string.split('');
        invert2Indexes(chars);
        var returnString = chars.join('');
    } else {
        var returnString = string;
    }
    return returnString;
}

function invert2Indexes(a){
    var randomIndex = randomize(1, a.length-2);
    var temp;
    a.forEach(function(value, i){
        if (i === randomIndex && i < a.length){
            temp = a[i];
            a[i] = a[i+1];
            a[i+1] = temp;
        }
    });
}

function randomize(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ucfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}