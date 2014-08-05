Meteor.publish('WowChats', function(options) {
    console.log('server:', options)

    var Future = Npm.require('fibers/future')
    var future = new Future
    Meteor.setTimeout(function() {
        future.return()
    }, 0)
    future.wait()

    return WowChat.find({}, options)
});
