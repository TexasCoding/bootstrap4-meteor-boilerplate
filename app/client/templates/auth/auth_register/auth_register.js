/*****************************************************************************/
/* AuthRegister: Event Handlers */
/*****************************************************************************/
Template.AuthRegister.events({
  'submit #authRegister': function(e, tmpl) {
    e.preventDefault();

    var user = {
      email: $('[name=email]').val(),
      password: $('[name=password]').val(),
      profile: {
        firstName: $('[name="profile.firstName"]').val(),
        lastName: $('[name="profile.lastName"]').val(),
        phone: $('[name="profile.phone"]').val(),
        fax: $('[name="profile.fax"]').val(),
        cell: $('[name="profile.cell"]').val(),
        address: {
          address1: $('[name="profile.address.address1"]').val(),
          address2: $('[name="profile.address.address2"]').val(),
          city: $('[name="profile.address.city"]').val(),
          state: $('[name="profile.address.state"]').val(),
          zip: $('[name="profile.address.zip"]').val(),
        }
      }
    };

    Accounts.createUser(user, function(err, res) {
      if (err) {
        FlashMessages.clear();
        FlashMessages.sendSuccess('There were errors creating your account.');
      } else {
        FlashMessages.clear();
        FlashMessages.sendSuccess('You\'re account has been created, and you are now logged in.');
        Router.go('home');
      }

    });
  }
});

/*****************************************************************************/
/* AuthRegister: Helpers */
/*****************************************************************************/
Template.AuthRegister.helpers({});

/*****************************************************************************/
/* AuthRegister: Lifecycle Hooks */
/*****************************************************************************/
Template.AuthRegister.onCreated(function() {});

Template.AuthRegister.onRendered(function() {});

Template.AuthRegister.onDestroyed(function() {});
