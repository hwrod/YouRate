/*****************************************************************************/
/*  Client and Server Methods */
/*****************************************************************************/
Meteor.methods({
  'videos/add': function (url) {
    if (Meteor.isServer) {
      const id = YoutubeApi.parseId(url)
      if (id) {
        let metadata = YoutubeApi.getMetaData(id)
        metadata.id = id
        metadata._id = id
        metadata.url = url
        metadata.rating = 0
        metadata.createdAt = new Date()
        try {
          const insertion = Videos.insert(metadata)
        } catch (e) {
          throw new Meteor.Error('url-exists', 'Sorry, that video has already been submitted.')
        }
      } else {
        throw new Meteor.Error('url-invalid', 'Sorry, please provide a valid YouTube link.')
      }
    }
  },

  'videos/upvote': function (_id) {
    Videos.update({_id}, {$inc: {rating: 1}})
  },

  'videos/downvote': function (_id) {
    Videos.update({_id}, {$inc: {rating: -1}})
  }
})
