import axios from 'axios';

/**
 * This helper function will retrieve a JSON format from
 * posts at Medium service
 *
 * @param {*} username The same username from Medium account
 * @returns
 */
function rss2json(username) {
  return axios.get(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${username}`,
  );
}

async function handler(req, res) {
  const getRss2Json = await rss2json('@vrbarros');

  const { data = {} } = getRss2Json;
  const { status, feed, items: posts } = data;

  if (status === 'ok') {
    res.status(200).json({ ...feed, posts });
  } else {
    res.status(500).json(data);
  }
}

export default handler;
