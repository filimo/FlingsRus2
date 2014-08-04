WowChat = new Meteor.Collection('wowChat')

Meteor.methods({
    saveMessage: function(message) {
        var post = _.extend(_.pick(message, 'text'))

        WowChat.update(message._id, post)
    }
})