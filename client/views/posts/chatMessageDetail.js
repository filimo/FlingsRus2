Template.chatMessageDetail.helpers({

})

Template.chatMessageDetail.events({
    'submit form': function(event) {
        event.preventDefault()

        var message = {
            _id: this._id,
            text: $(event.currentTarget).find('[name=text]').val()
        }

        Meteor.call('saveMessage', message, function() {
            if(error) return alert(error.reason)
        })
    }
})