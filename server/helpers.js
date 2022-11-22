const lodash = require("lodash");

/*
    * Function to get Random Words from the data.json file
    * @param {Array} allWords - Array of all the words from the data.json file
    * @returns {Array} - Array of 10 Random Words       
*/
function getRandomWords(allWords) {
    const randomNounWord = lodash.sample(allWords.filter((word) => word.pos === "noun"));
    const randomVerbWord = lodash.sample(allWords.filter((word) => word.pos === "verb"));
    const randomAdjectiveWord = lodash.sample(allWords.filter((word) => word.pos === "adjective"));
    const randomAdverbWord = lodash.sample(allWords.filter((word) => word.pos === "adverb"));

    const randomWords = [randomNounWord, randomVerbWord, randomAdjectiveWord, randomAdverbWord];
  
    const remainingWords =  lodash.filter(allWords, word => !randomWords.includes(word));
    const otherRandomWords = lodash.sampleSize(remainingWords, 6);
  
    const randomWordList = [...randomWords,...otherRandomWords];
    const shuffledWordList = lodash.shuffle(randomWordList);

    return shuffledWordList;
}

/*
    * Function to get the User Rank
    * @param {Number} userScore - User Score
    * @param {Array} scoresList - Array of all the scores from the data.json file
    * @returns {Number} - Rank of the User
    * @example
    * getUserRank(10, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]) // 100
    * getUserRank(50, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]) // 50
*/
function getUserRank(userScore, allScores) {
    const numberOfScoresBelowUserScore = allScores.filter((score) => score < userScore).length;
    const rank = (numberOfScoresBelowUserScore / allScores.length) * 100;
    return rank;
}

module.exports = { getRandomWords ,getUserRank};