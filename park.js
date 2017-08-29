var Park = function() {

  this.enclosure = [];

}

Park.prototype.size = function() {
  return this.enclosure.length;
}

Park.prototype.add = function(dinosaur) {
  this.enclosure.push(dinosaur);
}

Park.prototype.remove = function(dinosaurType) {
  for( dinosaur of this.enclosure ) {
    if (dinosaurType = dinosaur.type);
      this.enclosure.splice(dinosaurType, 1);
  }
}

Park.prototype.twoOrMoreOffspring = function() {
  for( dinosaur of this.enclosure ) {
    if (dinosaur.offspringPerYear >= 2) {
      console.log(dinosaur.offspringPerYear);
      return dinosaur;
    }
  }
}

Park.prototype.calculateDinosaurs = function(years) {
  count = 0
  for ( dinosaur of this.enclosure ) {
    count += ((dinosaur.offspringPerYear * years) + 1);
  }
  return count;
}

module.exports = Park;