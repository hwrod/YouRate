Videos = new Mongo.Collection('videos')
if (Meteor.isServer) {
  Videos.allow({
    insert: function (userId, doc) {
      return false
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false
    },

    remove: function (userId, doc) {
      return false
    }
  })

  Videos.deny({
    insert: function (userId, doc) {
      return true
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true
    },

    remove: function (userId, doc) {
      return true
    }
  })
}
