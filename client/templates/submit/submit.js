/*****************************************************************************/
/* Submit: Event Handlers */
/*****************************************************************************/
Template.Submit.events({
  'submit form' (e) {
    e.preventDefault()
    Meteor.call('videos/add', e.target.url.value, (error, result) => {
      if (error) toastr.error(error.reason)
      else e.target.url.value = ''
    })
  }
})
