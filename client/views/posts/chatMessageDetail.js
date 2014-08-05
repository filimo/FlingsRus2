Template.chatMessageDetail.helpers({
    classRouter: function() {
        var args = Array.prototype.slice.call(arguments, 0)
        args.pop()
        debugger
    }
})

Template.chatMessageDetail.events({
    'submit form': function(event, template) {
        event.preventDefault()

        var message = {
            _id: this._id,
            text: template.$('[name=text]').val()
        }

        Meteor.call('saveMessage', message, function(error) {
            if(error) return alert(error.reason)
        })
    }
})