/*****************************************************************************/
/*  YouTube API */
/*****************************************************************************/

YoutubeApi.authenticate({ 
  type: 'key', 
  key: Meteor.settings.YOUTUBE_API_KEY
})

YoutubeApi.parseId = (url) => {
  const match = url.match(/^(?:https?:\/\/|\/\/)?(?:www\.|m\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})(?![\w-])/)
  return match && match[1]
}

YoutubeApi.getMetaData = (id) => {
  const getMetadata = Meteor.wrapAsync(YoutubeApi.videos.list, YoutubeApi.videos)
  const metadata = getMetadata({
    id: id,
    part: "id,snippet",
  })
  try {
    const snippet = metadata.items[0].snippet
    return snippet
  } catch (e) {
    return null
  }
}

YoutubeApi.searchVideos = (query) => {
  YoutubeApi.search.list({
    part: "id,snippet",
    type: "video",
    maxResults: 1,
    q: query,
  })
}
