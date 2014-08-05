var timeCounter = 0
var timeCounterListener = new Deps.Dependency()

var getTimeCounter = function() {
    timeCounterListener.depend()
    return timeCounter
}

Meteor.setInterval(function() {
    timeCounter++;
    timeCounterListener.changed()
}, 1000)

Template.wowChat.helpers({
//    chatMessages: function() {
//        return WowChat.find()
//    }
    timeCounter: function() {
        return getTimeCounter()
    }
})