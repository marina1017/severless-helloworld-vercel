const twitterText = require('twitter-text');

module.exports = (req, res) => {
  const { text = 'World' } = req.query
  const result = twitterText.parseTweet(text);
  res.json({
    result: result,
  })
}