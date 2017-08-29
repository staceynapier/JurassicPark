var assert = require("assert");
var Park = require("../park.js");
var Dinosaur = require("../dinosaur.js");

describe( "Park", function() {

  var park;
  var dinosaur;

  beforeEach( function() {
    park = new Park();
  } )

  it("enclosure should start empty", function() {
    assert.strictEqual( park.size(), 0 );
  })

  it("should be able to add dinosaur", function() {
    dinosaur = new Dinosaur("Tyrannosaurus", 2);
    park.add(dinosaur);
    assert.strictEqual( park.size(), 1 );
  })

  it("should be able to remove all dinosaurs of a particular type", function() {
    dinosaur1 = new Dinosaur("Tyrannosaurus", 2);
    dinosaur2 = new Dinosaur("Velociraptor", 1);
    dinosaur3 = new Dinosaur("Triceratops", 3);
    park.add(dinosaur1);
    park.add(dinosaur1);
    park.add(dinosaur2);
    park.add(dinosaur3);
    console.log(park);
    park.remove(dinosaur1);
    console.log(park);
    assert.strictEqual( park.size(), 2 );
  })

  it("should get all the dinosaurs with an offspring count of more than 2", function() {
    dinosaur1 = new Dinosaur("Tyrannosaurus", 1);
    dinosaur2 = new Dinosaur("Velociraptor", 1);
    dinosaur3 = new Dinosaur("Triceratops", 3);
    park.add(dinosaur1);
    park.add(dinosaur1);
    park.add(dinosaur2);
    park.add(dinosaur3);
    assert.strictEqual( park.twoOrMoreOffspring(), dinosaur3 )
  })

  it("should be able to calculate number of dinosaurs after year one, starting with 1 dinosaur", function() {
    dinosaur = new Dinosaur("Tyrannosaurus", 3);
    park.add(dinosaur);
    assert.strictEqual( park.calculateDinosaurs(1), 4 );
  })

  it("should be able to calculate number of dinosaurs after year two, starting with 1 dinosaur", function() {
    dinosaur = new Dinosaur("Tyrannosaurus", 3);
    park.add(dinosaur);
    assert.strictEqual( park.calculateDinosaurs(2), 7 );
  })

  it("should be able to calculate number of dinosaurs after year two, starting with 2 dinosaurs", function() {
    dinosaur1 = new Dinosaur("Tyrannosaurus", 3);
    dinosaur2 = new Dinosaur("Velociraptor", 1);
    park.add(dinosaur1);
    park.add(dinosaur2);
    assert.strictEqual( park.calculateDinosaurs(2), 10 );
  })

} )