Meteor.publish('WowChats', function() {
    return WowChat.find();
});
