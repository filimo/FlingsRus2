Template.layout.helpers({
    appVersion: function() {
        return Session.get('appVersion')
    },
    user: function() {
        var user = Meteor.user()
        return user?user.emails[0].address:'none'
    }
})