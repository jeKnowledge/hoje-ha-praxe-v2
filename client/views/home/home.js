Template.home.helpers({
    isTherePraxe: function () {
        return Praxe.findOne();
    },

    reason: function () {
        return Praxe.findOne().reason;
    },

    notification: function () {
        return Praxe.findOne().notification;
    }
});

Template.home.events({
});

Template.home.onCreated(function () {
    this.subscribe("praxe");
});
