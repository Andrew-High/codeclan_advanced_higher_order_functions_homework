const IsogramFinder = function (word) {
    this.wordLowerCase = word.toLowerCase();
    this.wordSplit = this.wordLowerCase.split('');
}

IsogramFinder.prototype.isIsogram = function () {
    const uniqueLetters = [];
    const answer = this.wordSplit.every(wordLetter => {
        let check = uniqueLetters.includes(wordLetter);
        if (check === false){
            uniqueLetters.push(wordLetter);
        };
        return !check        
    });
    return answer;
}

module.exports = IsogramFinder;
