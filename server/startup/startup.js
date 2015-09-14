Meteor.startup(function () {
  if (Meteor.users.find().fetch().length == 0) {
    Accounts.createUser({ email: 'admin@praxeuc.pt', password: 'veteranos' })
  }

  if (Praxe.find().fetch().length == 0) {
    Praxe.insert({
      state: true,
      notification: 'Notificação oficial do conselho de vetaranos da Universidade de Coimbra.',
      reason: ''
    })
  }
});
