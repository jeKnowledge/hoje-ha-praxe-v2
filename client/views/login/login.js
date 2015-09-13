Template.loginForm.events({
  'submit #login-form' : function(e, t) {
    e.preventDefault();

    var email = $('#login-email').val();
    var password = $('#login-password').val();

    Meteor.loginWithPassword(email, password, function(err) {
      if (err) {
        console.log('Error.');
        $("#login-form").before("<p>Wrong Credentials!</p>")
      } else {
        console.log('Logged in !');
      }
    });

    return false;
  }
});
