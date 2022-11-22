const express = require("express");
const app = express();
const data = require("./data.json");
const lodash = require("lodash");
const cors = require("cors");

app.use(cors())
app.use(express.json());

app.get("/wordList", (req, res) => {
  const allWords = data.wordList;

  const randomNounWord = lodash.sample(allWords.filter((word) => word.pos === "noun"));
  const randomVerbWord = lodash.sample(allWords.filter((word) => word.pos === "verb"));
  const randomAdjectiveWord = lodash.sample(allWords.filter((word) => word.pos === "adjective"));
  const randomAdverbWord = lodash.sample(allWords.filter((word) => word.pos === "adverb"));
  const randomWords = [randomNounWord, randomVerbWord, randomAdjectiveWord, randomAdverbWord];

  const remainingWords =  lodash.filter(allWords, word => !randomWords.includes(word));
  const otherRandomWords = lodash.sampleSize(remainingWords, 6);

  const randomWordList = [...randomWords,...otherRandomWords];
  const shuffledWordList = lodash.shuffle(randomWordList);

  res.json(shuffledWordList);
});

app.post("/rank", (req, res) => {
  const numberOfScoresBelowUserScore = data.scoresList.filter((score) => score < req.body.score).length;
  const rank = (numberOfScoresBelowUserScore / data.scoresList.length) * 100;
  res.json(rank);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
