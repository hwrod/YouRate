/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  'video/metadata': function(id) {
    return YoutubeApi.getMetaData(id)
  },

  'video/search': function(search) {
    YoutubeApi.search.list({
      part: "id,snippet",
      type: "video",
      maxResults: 1,
      q: search,
    })
  }
})
