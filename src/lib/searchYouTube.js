let lastSearchTime = 0;
var searchYouTube = (options, callback) => {
  const now = Date.now();
  if (now - lastSearchTime >= 500) {
    lastSearchTime = now;
    $.get(
      'https://www.googleapis.com/youtube/v3/search',
      {
        part: 'snippet',
        q: options.query,
        maxResults: options.max,
        key: options.key,
        type: 'video',
        videoEmbeddable: 'true',
      }
    )
      .done(data => callback(data.items))
      .fail(data => console.log('FAILURE:', data));
  }
};

export default searchYouTube;
