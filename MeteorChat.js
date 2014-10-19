Messages = new Mongo.Collection("Messages");

if (Meteor.isClient) {
    Template.Chat.helpers({
        Messages: function() {
            return Messages.find({}, {
                sort: {timestamp: 1},
                limit: 10
            }).fetch().reverse();
        }
    });

    Template.Chat.events({
        'click button, keypress.message': function (event, template) {
            if(event.type === 'keypress'  && event.which !== 13)
                return;
            Messages.insert({
                timestamp: new Date(),
                username: template.find("#username").value,
                text: template.find("#message").value
            });
            template.find("#message").value = ""; // Empty field
        }
    });

}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // Nothing in particular
    });
    Messages.allow({
        'insert': function(messageObject){
            return true;
        }
    })
}
