Meteor.methods({
  updatePraxe: function (state, notification, reason) {
    var id = Praxe.findOne()._id;
    Praxe.update({ _id: id}, {
      $set: { state: state,
        notification: notification, 
        reason: reason }
    })
  }
});
