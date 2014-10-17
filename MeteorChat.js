Messages = new Mongo.Collection("Messages");

if (Meteor.isClient) {
    Template.Chat.helpers({
        Messages: function() {
            return Messages.find();
        }
    });

    Template.Chat.events({
        'click button': function (event, template) {
            Messages.insert({username: template.find("#username").value, text: template.find("#message").value } );
            template.find("#message").value = "";
        }
    });

}

if (Meteor.isServer) {
    Meteor.startup(function () {

    });
}
