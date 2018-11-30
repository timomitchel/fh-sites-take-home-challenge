var assert = require('assert');
var PokerHand = require('../pokerHand.js');

/**
 * test
 */
describe('Rank a Royal Flush', function() {
  it('Return royal flush when hand given', function() {
    var hand = new PokerHand('As Ks Qs Js 10s');
    assert.equal(hand.getRank(), 'Royal Flush');
  });
});

/**
 * test
 */
describe('Rank a Pair', function() {
  it('Return one pair when hand given', function() {
    var hand = new PokerHand('Ah As 10c 7d 6s');

    assert.equal(hand.getRank(), 'One Pair');
  });
});

/**
 * test
 */
describe('Rank Two Pair', function() {
  it('Return two pair when hand given', function() {
    var hand = new PokerHand('Kh Kc 3s 3h 2d');

    assert.equal(hand.getRank(), 'Two Pair');
  });
});

/**
 * test
 */
describe('Rank A Flush', function() {
  var hand = new PokerHand('Kh Qh 6h 2h 9h');

  it('Return flush when hand given', function() {
    assert.equal(hand.getRank(), 'Flush');
  });
});

describe('Rank A Straight', function () {
  var hand = new PokerHand('Kh Qh Js 10h 9h');

  it('Return straight when hand given', function () {
    assert.equal(hand.getRank(), 'Straight');
  });
});

describe('Rank Another Straight', function () {
  var hand = new PokerHand('10h Qh Js 8h 9h');

  it('Return straight when hand given', function () {
    assert.equal(hand.getRank(), 'Straight');
  });
});

describe('Rank Three of a Kind', function () {
  var hand = new PokerHand('10h 10s 10d 8h 9h');

  it('Return three of a kind when hand given', function () {
    assert.equal(hand.getRank(), 'Three of a Kind');
  });
});

describe('Rank Four of a Kind', function () {
  var hand = new PokerHand('2h 2d 2s 10h 2c');

  it('Return four of a kind when hand given', function () {
    assert.equal(hand.getRank(), 'Four of a Kind');
  });
});

describe('Rank Straight Flush', function () {
  var hand = new PokerHand('Ah 2h 3h 4h 5h');

  it('Return straight flush when hand given', function () {
    assert.equal(hand.getRank(), 'Straight Flush');
  });
});

describe('Rank High Card', function () {
  var hand = new PokerHand('Ah 5h 3h 4h 10d');

  it('Return high card when hand given', function () {
    assert.equal(hand.getRank(), 'A is high card');
  });
});

describe('Edge Case - Non String', function () {
  var hand = new PokerHand(['Ah 5h 3h 4h 10d']);

  it('Returns helpful error message', function () {
    assert.equal(hand.getRank(), "Not a Valid Poker Hand. Please use one string of 5 cards in a rank/suit format such as: 'Ad 5h 3h 4h 10d'");
  });
});

describe('Edge Case - Wrong String Format', function () {
  var hand = new PokerHand('Ah 5h 3h 4h');

  it('Returns helpful error message', function () {
    assert.equal(hand.getRank(), "Not a Valid Poker Hand. Please use one string of 5 cards in a rank/suit format such as: 'Ah 5h 3h 4h 10d'");
  });
});
