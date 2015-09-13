Template.adminMenu.helpers({
});

Template.adminMenu.onRendered(function() {
  Meteor.subscribe("praxe", function() {
    var praxe = Praxe.findOne();
    if (praxe.state) {
      $('#praxe-state').attr('checked', 'checked');
    }
    $('#praxe-notification').val(praxe.notification);
    $('#praxe-reason').val(praxe.reason);
  });
});

Template.adminMenu.events({
  'submit #praxe-form': function(e, t) {
    e.preventDefault();

    var state = $("#praxe-state").is(':checked'); 
    var notification = $('#praxe-notification').val();
    var reason = $('#praxe-reason').val();

    var id = Praxe.findOne()._id;
    Praxe.update({ _id: id}, {
      $set: { state: state,
        notification: notification, 
        reason: reason }
    })

    return false;
  }
});
