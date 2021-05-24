import { parseTweet } from 'twitter-text';

export default (req, res) => {
  const text = req.query
  const result = parseTweet(text);
  res.json({
    result: result,
  })
}