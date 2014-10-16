if (Meteor.isClient) {
    var Messages = new Meteor.Collection("Messages");

    Template.Chat.helpers({
        Messages: function() {
            return Messages.find()
        }
    });

    Template.Chat.events({
        'click button': function (event, template) {
            Messages.insert({username: template.find("#username").value, text: template.find("#message").value } );

        }
    });

}

if (Meteor.isServer) {
    Meteor.startup(function () {
        Messages = new Mongo.Collection("Messages");
    });
}
