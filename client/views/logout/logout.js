Template.logoutForm.events({
  "submit #logout-form": function(e, t) {
    e.preventDefault();

    Meteor.logout(function(e) {
      if (e) {
        console.log("Error.");
      }
    });

    return false;
  }
});
