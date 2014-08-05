Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

var ChatMessagesController = RouteController.extend({
    action: function() {
//            this.render('loading')
//            setTimeout(function() {
        this.render()
//            }.bind(this), 200)
    },
    waitOn: function() {
        var limit = parseInt(this.params.messagesLimit) || 100
        return Meteor.subscribe('WowChats', {limit: limit})
    },
    messages: function() {
        return WowChat.find()
    },
    data: function() {
        var len = this.messages().fetch().length
        return {
            chatMessages: this.messages()
        }
    }
})

Router.map(function() {
    this.route('wowChat', {
        path: '/:messagesLimit?',
        controller: ChatMessagesController
    });
    this.route('chatMessageDetail', {
        path: '/chatMessageDetail/:_id',
        data: function() {
            return WowChat.findOne(this.params._id)
        }
    });
});

//Router.onBeforeAction('loading')