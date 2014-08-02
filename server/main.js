process.env.MAIL_URL="smtp://filimo:cyecyevhbr@smtp.googlemail.com:465"
Accounts.config({sendVerificationEmail: true, forbidClientAccountCreation: false});
console.log('server5')
//console.log(Meteor.userId())
//Accounts.sendResetPasswordEmail('im8HYG8vod8hND5WK')
Deps.autorun(function() {
//    console.log('users:' + Meteor.users.find().count())
})