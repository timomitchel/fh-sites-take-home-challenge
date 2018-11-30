class PokerHand {
  constructor(cards) {
    this.cards = cards;
    this.cardRanks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    this.handRanks = [
      'Royal Flush',
      'Straight Flush',
      'Four of a kind',
      'Full house',
      'Flush',
      'Straight',
      'Three of a kind',
      'Two Pair',
      'One Pair',
      'High card',
    ];
    
  }

  getRanks(cards) {
    let cardRanks = cards.map(card => {
      if (card.length === 2) {
        return card[0]
      }
      else {
        return card[0] + card[1]
      }
    })
    return cardRanks
  }

  getSuits(cards) {
   let cardSuits =  cards.map(card => {
      if (card.length === 2) {
        return card[1]
      }
      else {
        return card[2]
      }
    })
    return cardSuits
  }

  findDuplicates(arr) {
    let len = arr.length,
      pairs = [],
      threes = [],
      fours = [],
      counts = {};

    for (var i = 0; i < len; i++) {
      let item = arr[i];
      counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1;
      if (counts[item] === 2) {
        pairs.push(item);
      }
      if (counts[item] === 3) {
        threes.push(item);
      }
      if (counts[item] === 4) {
        fours.push(item);
      }
    }
    return [pairs, threes, fours];
  }

  getIndexRanks(ranks) {
   return ranks.map(rank => this.cardRanks.indexOf(rank));
  }

  getDescendingRanks(indexRanks) {
    return indexRanks.sort((a, b) => b - a);
  }

  checkHandValidity(cardArray) {
    let validity = cardArray.length === 5
    return validity
  }
  getRank() {
    // Implement poker hand ranking
    if (typeof this.cards !== "string") {
      return "Not a Valid Poker Hand. Please use one string of 5 cards in a rank/suit format such as: 'Ad 5h 3h 4h 10d'"
    }
    let cardArray =  this.cards.split(" ");
    let validity = this.checkHandValidity(cardArray);
    if (!validity) {
      return "Not a Valid Poker Hand. Please use one string of 5 cards in a rank/suit format such as: 'Ah 5h 3h 4h 10d'"
    }
    let ranks = this.getRanks(cardArray);
    let suits = this.getSuits(cardArray);
    let indexRanks = this.getIndexRanks(ranks);
    let hasDuplicates = this.findDuplicates(indexRanks);
    let descendingRanks = this.getDescendingRanks(indexRanks);
    let isFlush = suits.every(suit => suit === suits[0]);
    let isStraight = descendingRanks[0] - descendingRanks[4] === 4 || descendingRanks[0] - descendingRanks[4] === 12;
    if (isStraight & isFlush & descendingRanks[4] === 8) {
      return 'Royal Flush';
    } else if (isStraight & isFlush) {
        return 'Straight Flush';
    } else if (isFlush & !isStraight) {
        return 'Flush';
    } else if (!isFlush & isStraight) {
        return 'Straight';
    } else if (hasDuplicates[2].length === 1) {
        return 'Four of a Kind';
    } else if (hasDuplicates[1].length === 1 & hasDuplicates[0].length === 2) {
        return 'Full House';
    } else if (hasDuplicates[1].length === 1 & hasDuplicates[0].length === 1) {
        return 'Three of a Kind';
    } else if (hasDuplicates[1].length === 0 & hasDuplicates[0].length === 2) {
        return 'Two Pair';
    } else if (hasDuplicates[1].length === 0 & hasDuplicates[0].length === 1) {
        return 'One Pair';
    } else {
        return `${this.cardRanks[descendingRanks[0]]} is high card`;
    }
  }
}
module.exports = PokerHand;
