var searchYouTube = (options, callback) => {
  $.get(
    'https://www.googleapis.com/youtube/v3/search',
    {
      part: 'snippet',
      q: options.query,
      maxResults: options.max,
      key: options.key,
      type: 'video',
    }
  )
    .done(data => callback(data.items))
    .fail(data => console.log('FAILURE:', data));
};

export default searchYouTube;
