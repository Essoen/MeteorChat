if (Meteor.isClient) {
    Session.set("message", "");
    var Messages = new Meteor.Collection("Messages");

    Template.Chat.helpers({
        Messages: function(){
            return Messages.find()
        },
        message: function () {
            return Session.get("message");
        }
    });

    Template.Chat.events({
        'click button': function (event, template) {
            Messages.insert({username: "Esso", text: template.find("#message").value } );

        }
    });

}

if (Meteor.isServer) {
    Meteor.startup(function () {
        Messages = new Mongo.Collection("Messages");
    });
}
