Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('WowChats'); }
});
Router.map(function() {
    this.route('wowChat', {path: '/'});
    this.route('chatMessageDetail', {
        path: '/chatMessageDetail/:_id',
        data: function() {
            return WowChat.findOne(this.params._id)
        }
    });
});
