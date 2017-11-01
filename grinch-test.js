var assert = require('chai').assert;
var Grinch = require('./grinch');

describe('Grinch', function() {

  it('should have a mood', function() {
    var grinch = new Grinch({mood: 'grumpy'});
    assert.equal(grinch.mood, 'grumpy');
  });

  it('should have a grumpy mood by default', function() {
    var grinch = new Grinch({});
    assert.equal(grinch.mood, 'grumpy');
  });

  it('should have a heart two sizes too small', function() {
    var grinch = new Grinch({mood: 'maniacal'});
    assert.equal(grinch.heart, 'two sizes too small');
  });

  it('should possess no presents by default', function()  {
    var grinch = new Grinch({mood: 'grumpy'});
    assert.deepEqual(grinch.presents, []);
  });

  it('should be able to alphabetize presents', function() {
    var grinch = new Grinch({presents: ['drums', 'bicycles', 'plums', 'tricycles']});
    assert.deepEqual(grinch.alphabetize(), ['bicycles', 'drums', 'plums', 'tricycles']);
  });

  it('should supersize presents when his mood is maniacal', function() {
    var grinch = new Grinch({mood: 'maniacal', presents: ['drums', 'bicycles', 'plums', 'tricycles']});
    assert.deepEqual(grinch.alphabetize(), ['BICYCLES', 'DRUMS', 'PLUMS', 'TRICYCLES']);
  });

  it('should clean out any presents that are not strings', function() {
    var grinch = new Grinch({mood: 'grumpy', presents: ['bicycles', 55, 'tricycles', true]});
    assert.deepEqual(grinch.cleanPresents(), ['bicycles', 'tricycles']);
  });

  it('should have a jolly mood and normal heart size when he realizes the true meaning of the holidays', function() {
    var grinch = new Grinch({mood: 'grumpy'});
    grinch.realizeTrueMeaningOfHolidays();
    assert.equal(grinch.mood, 'jolly');
    assert.equal(grinch.heart, 'three times two sizes too small');
  });

  it('should be able to steal presents', function() {
    var grinch = new Grinch({mood: 'grumpy', presents: ['drums']});
    grinch.stealPresents(['bicycles', 'plums', 'tricycles']);
    assert.deepEqual(grinch.presents, ['drums', 'bicycles', 'plums', 'tricycles']);
  });

});
