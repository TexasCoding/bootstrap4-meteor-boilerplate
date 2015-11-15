/*****************************************************************************/
/* AuthLogin: Event Handlers */
/*****************************************************************************/
Template.AuthLogin.events({
  "submit #authLogin": function(event) {
    event.preventDefault();

    var email = $('[name=email]').val();
    var password = $('[name=password]').val();

    Meteor.loginWithPassword(email, password, function(err) {
      if (err) {
        FlashMessages.clear();
        FlashMessages.sendError("Errors while logging in. Make sure email and password are correct.");
      } else {
        FlashMessages.clear();
        FlashMessages.sendSuccess("You have been logged in.");
        Router.go('home');
      }
    });

  }
});

/*****************************************************************************/
/* AuthLogin: Helpers */
/*****************************************************************************/
Template.AuthLogin.helpers({

});

/*****************************************************************************/
/* AuthLogin: Lifecycle Hooks */
/*****************************************************************************/
Template.AuthLogin.onCreated(function() {});

Template.AuthLogin.onRendered(function() {});

Template.AuthLogin.onDestroyed(function() {});
