function Grinch(props) {
  this.mood = props.mood || 'grumpy';
  this.heart = 'two sizes too small';
  this.presents = props.presents || [];
}

Grinch.prototype.stealPresents = function(presents) {
  this.presents = this.presents.concat(presents);
}

Grinch.prototype.alphabetize = function() {
  if (this.mood === 'maniacal') {
    return this.presents.map(function(present) {
      return present.toUpperCase();
    }).sort();
  }
  return this.presents.sort();
}

Grinch.prototype.cleanPresents = function() {
  return this.presents.filter(function(present) {
    return typeof present === 'string';
  });
}

Grinch.prototype.realizeTrueMeaningOfHolidays = function() {
  this.mood = 'jolly';
  this.heart = 'three times two sizes too small';
}

module.exports = Grinch;
