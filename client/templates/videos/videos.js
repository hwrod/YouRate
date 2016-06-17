/*****************************************************************************/
/* Videos: Event Handlers */
/*****************************************************************************/
Template.Videos.events({
  'click .up.vote':   (e) => {
    Meteor.call('videos/upvote',   $(e.target).data('id'))
    $(e.target).closest('h1').slideUp()
  },
  'click .down.vote': (e) => {
    Meteor.call('videos/downvote', $(e.target).data('id'))
    $(e.target).closest('h1').slideUp()
  },
})

/*****************************************************************************/
/* Videos: Helpers */
/*****************************************************************************/
Template.Videos.helpers({
  videos: ()=> Videos.find({}, {sort: {rating: -1, createdAt: -1}}),
  date: (date)=> moment(date).format('lll'),
  hasVideos: ()=> Videos.find().count()
})

/*****************************************************************************/
/* Videos: Lifecycle Hooks */
/*****************************************************************************/
Template.Videos.onCreated(function () {
  this.subscribe('videos')
})
