const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phraseLowerCase = phrase.toLowerCase();
  this.phraseSplit = this.phraseLowerCase.split('');
}

PangramFinder.prototype.isPangram = function () {
  const answer = this.alphabet.every(alphabetLetter => {
    return this.phraseSplit.some(phraseLetter => phraseLetter === alphabetLetter)
  });
  return answer;
};

module.exports = PangramFinder;
