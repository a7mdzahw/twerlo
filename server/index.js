const express = require("express");
const data = require("./data.json");
const cors = require("cors");
const { getRandomWords, getUserRank } = require("./helpers");

// Create a new express application instance
const app = express();

// Middleware for CORS
app.use(cors());
// Middleware for parsing JSON in Request Body
app.use(express.json());

// GET Request to get random 10 Words from the data.json file and Include at least 1 word from each category
app.get("/wordList", (req, res) => {
  const allWords = data.wordList;
  const randomWords = getRandomWords(allWords);
  res.json(randomWords);
});

// POST Request to check User Rank among all the users Scores
app.post("/rank", (req, res) => {
  const rank = getUserRank(req.body.score, data.scoresList);
  res.json(rank);
});

// PORT for the Server
const port = process.env.PORT || 3000;

// Start the Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
