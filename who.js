function Who(name) {
  this.name = name;
  this.presents = [];
}

Who.prototype.sing = function(grinch) {
  if (this.presents.length < 3) {
    this.presents.unshift(grinch.presents.shift());
  }
}

module.exports = Who;
