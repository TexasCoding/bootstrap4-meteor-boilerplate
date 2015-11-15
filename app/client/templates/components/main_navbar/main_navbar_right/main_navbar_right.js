/*****************************************************************************/
/* MainNavbarRight: Event Handlers */
/*****************************************************************************/
Template.MainNavbarRight.events({
  "click .logout": function(event, template) {
    event.preventDefault();

    Meteor.logout();
    FlashMessages.clear();
    FlashMessages.sendInfo('You have been logged out.');
    Router.go('home');
  }
});

/*****************************************************************************/
/* MainNavbarRight: Helpers */
/*****************************************************************************/
Template.MainNavbarRight.helpers({
});

/*****************************************************************************/
/* MainNavbarRight: Lifecycle Hooks */
/*****************************************************************************/
Template.MainNavbarRight.onCreated(function () {
});

Template.MainNavbarRight.onRendered(function () {
});

Template.MainNavbarRight.onDestroyed(function () {
});
