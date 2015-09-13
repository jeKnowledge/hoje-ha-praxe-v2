Meteor.startup(function () {
  if (Meteor.users.find().fetch().length == 0) {
    Accounts.createUser({email: 'admin@praxeuc.com', password: 'password123'})
  }
});
